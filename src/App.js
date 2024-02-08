import {useContext, useEffect, useMemo } from 'react';
import {Context} from './context';
import './App.css';
import Layout from './components/Layout'
import Card from './components/Card'

function App() {
 const {state} = useContext(Context)
 const count = useMemo(()=> {
  return `you have ${state.items.length} image${state.items.length > 1 ? 's' : ''}`

 },[state.items])
  
  return (
    <Layout>
      
      <h1 className='text-center'>Gallery</h1>
      {count}
      <div className="row">
            {state.items.map((item, index)=> <Card key={index} {...item}/>)}
      </div>
    </Layout>
  );
}

export default App;