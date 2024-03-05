import {useContext, useEffect, useMemo } from 'react';
import {Context} from './context/FirestoreContext';
import './App.css';
import Layout from './components/Layout'
import Card from './components/Card' 
import Firestore from './handlers/firestore'
 
// const {readDocs} = Firestore

function App() {
 const {state, read} = useContext(Context)
 const count = useMemo(()=> {
  return `you have ${state.items.length} image${state.items.length > 1 ? 's' : ''}`

 },[state.items])

 useEffect(()=> {
  // readDocs().then(console.log)
  read()

 },[])
  
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