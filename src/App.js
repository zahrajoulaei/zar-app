import { useState, useEffect, useReducer } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Card from './components/Card';
import UploadForm from './components/Uploadform';


const photos = []

const initialState = {
  items: photos,
  count: photos.length,
  inputs: {title: null, file: null, path: null},
  isCollapsed: false

}
function reducer(state, action) {
  switch(action.type) {
    case 'setItem':
    return {
    ...state,
    items: [action.payload.path,...state.items]

    }
    default: return state


  }

}

function App() {
  const [state, dispatch]= useReducer(reducer, initialState)
  const [count, setCount] = useState()
  const [items, setItems] = useState(photos)
  const [isCollapsed, collapse]= useState(false)
  const [inputs, setInputs] = useState({title: null, file: null, path: null})

  const toggle = () => collapse(!isCollapsed)

  const handleOnChange = (e) => {
    if (e.target.name === 'file') {
      setInputs({...inputs, file: e.target.files[0], path: URL.createObjectURL(e.target.files[0])})
    } 
    else {setInputs({...inputs, title:e.target.value})}
  }
   

  const hanldeOnSubmit = (e)=> {
     e.preventDefault()
    //  setItems([inputs.path,...items])
    dispatch({type:'setItem', payload: {path: inputs.path} })
     setInputs({title: null, file: null, path: null})
     collapse(false)

  }
  useEffect( ()=> {
    console.log(state)
  },[state.items])

  useEffect(() => {
    setCount(`you have ${items.length} image${items.length > 1 ? 's' : ''}`)
  },[items])

  
  return (
    <>
      <Navbar />
      <div className="container text-center mt-5">

      <button className='btn btn-success float-end' onClick={toggle}>
        {isCollapsed? 'Close': '+ Add'}
      </button>

      <div className='clearfix mb-4'></div>

      <UploadForm inputs={inputs} isVisible= {isCollapsed} onChange= {handleOnChange} onSubmit = {hanldeOnSubmit}/>
      {count}
        <h1>Gallery</h1>

        <div className="row">
            {state.items.map((photo, index)=> <Card key={index} src={photo}/>)}
        </div>

      </div>
    </>
  );
}

export default App;