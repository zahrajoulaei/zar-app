import { useState, useEffect, useReducer } from 'react';
import './App.css';
import Layout from './components/Layout'
import Card from './components/Card'


const photos = []

const initialState = {
  items: photos,
  count: photos.length,
  inputs: {title: null, file: null, path: null},
  isCollapsed: false

}

const handleOnChange = (state ,e) => {
  if (e.target.name === 'file') {
    return {...state.inputs, file: e.target.files[0], path: URL.createObjectURL(e.target.files[0])}
  } 
  else {
    return {...state.inputs, title:e.target.value}}
}


function reducer(state, action) {
  switch(action.type) {
    case 'setItem':
    return {
      ...state,
      items: [state.inputs, ...state.items]
    }

    case 'setInputs':
    return {
      ...state,
      inputs: handleOnChange(state, action.payload.value)

    }
    case 'collapse': 
    return {
      ...state,
      isCollapsed: action.payload.bool
    }

    default: return state


  }

}

function App() {
  const [state, dispatch]= useReducer(reducer, initialState)
  const [count, setCount] = useState()

  const toggle = (bool) => dispatch({type: 'collapse',payload: {bool} })

  const handleOnChange = (e) => dispatch({
    type: 'setInputs', payload: {value:e }
  })
   
  const hanldeOnSubmit = (e)=> {
    e.preventDefault()
    dispatch({type:'setItem'})
    toggle(!state.isCollapsed)

  }

  useEffect(() => {
    setCount(`you have ${state.items.length} image${state.items.length > 1 ? 's' : ''}`)
  },[state.items])

  
  return (
    <Layout state={state}
     onChange={handleOnChange} 
     onSubmit={hanldeOnSubmit} 
     toggle={toggle}>
      
      <h1>Gallery</h1>
      {count}
      <div className="row">
            {state.items.map((photo, index)=> <Card key={index} src={photo}/>)}
      </div>
    </Layout>
  );
}

export default App;