import {  useMemo, useContext, useEffect } from "react";
import { Context } from "./context/FirestoreContext"
import Firestore from "./handlers/firestore";
import { useAuthContext } from "./context/AuthContext"
import Card from "./components/Card";
import Layout from "./components/Layout";
import "./App.css";




function App() {
  const { state, read } = useContext(Context)
  const { authenticate } = useAuthContext()
  const count = useMemo(() => {
    return `you have ${state.items.length} image${state.items.length > 1 ? 's': ''}`
  }, [state.items])

  useEffect(() => {
    read()
    authenticate()
  }, [])

  return (
    <Layout>
        <h1 className="text-center">Gallery</h1>
        {count}
        <div className="row">
        {state.items.map((item, index) => <Card key={index} {...item}/>)}
        </div>
    </Layout>
  );
 
}
export default App;
