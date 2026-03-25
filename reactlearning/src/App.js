//import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';
import Counter from './Counter';
import Nav from './Nav';
import ToDoList from './ToDoList';
import AddPost from './AddPost';
import axios from 'axios';

function App() {
  //let num=0;
  let[num,setNum]= useState(0);
  let [topic,setTopic]=useState("");
  let url="http://localhost:4100/arr";

  function increment(){
        //num++;
        setNum(num++);
        //console.log(num);
    }
    let decrement=()=>{
        //num--;
        //console.log(num);
        setNum(num--);
    }
    let [data,setData]= useState([
            {id:121,topic:"html",status:true},
            {id:122,topic:"css",status:false},
            {id:123,topic:"javascript",status:true},
            {id:124,topic:"react",status:true},
    
        ])
        function handleChange(id)
        {
            let list=data.map((obj1)=>obj1.id==id ?{...obj1,status:!obj1.status} : obj1)
            setData(list);
        }
    
        function handleDelete(id)
        {
            let list=data.filter((obj1)=>obj1.id!==id)
            setData(list);
            let deleteUrl=`${url}/${id}`;
            axios.delete(deleteUrl)
        }
  function handleSubmit(e)
  {
    e.preventDefault()
    addNewPost(topic);
    setTopic("");
  }
  function addNewPost(topic)
  {
    let id=String(data.length ?Number( data[data.length-1].id)+1 : 1);
    let obj={id,topic,status:false};
    let list=[...data,obj]
    setData(list)
    /*let option = {method:"POST",
                  headers:{"Content-Type": "application/json"},
                  body:JSON.stringify(obj)
  }
   apiRequest(url,option);*/
    //console.log(id);
    axios.post(url,obj);
  }
  let heading = "react";
  function add()
  {
    console.log("Welcome")
  }
  function sub(a,b)
  {
    console.log(a-b);
  }
  async function apiRequest(url,option)
  {
    let response=await fetch(url,option);
    if(response.status==200)
    {
      console.log("Success!!")
    }
  }
 
  async function dataFetching()
  {
    /*let response = await fetch(url);
    let values=await response.json();
    setData(values);*/
    let response=await axios.get(url);
    //console.log(response);
    let value=response.data;
    setData(value);
  }
  useEffect(()=>{
    dataFetching();
  },[])
  return (
    <div className="App">
     <h1>{heading}</h1>
     <button onClick={add}>click me once</button>
     <button onDoubleClick={()=>sub(10,8)}>click me twice</button>
     <Nav/>
     <Counter num={num} increment={increment} decrement={decrement}/>
     <AddPost topic={topic} handleSubmit={handleSubmit} setTopic={setTopic}/>
     <ToDoList data={data} handleChange={handleChange} handleDelete={handleDelete}/>
     
    </div>
    // <div></div> --> X X X X only one main tag should be there
  );
}

export default App; // this helps to use App() outside anywhere
