//import React, { useState } from 'react'
import { FaTrashAlt } from "react-icons/fa";

function ToDoList({ data, handleChange, handleDelete }) {
    /*let [datas,setData]= useState([
        {id:121,topic:"html",status:true},
        {id:122,topic:"css",status:false},
        {id:123,topic:"javascript",status:true},
        {id:124,topic:"react",status:true},

    ])
    function handleChange(id)
    {
        let list=datas.map((obj1)=>obj1.id==id ?{...obj1,status:!obj1.status} : obj1)
        setData(list);
    }

    function handleDelete(id)
    {
        let list=datas.filter((obj1)=>obj1.id!==id)
        setData(list);
    }*/
    return ( <
        div >
        <
        h1 > ToDoList < /h1> {
            data.map((obj) =>
                <
                li key = { obj.id } >
                <
                b > { obj.topic } <
                /b> <
                input type = 'checkbox'
                checked = { obj.status }
                onChange = {
                    () => { handleChange(obj.id) } }
                /> <
                button onClick = {
                    () => handleDelete(obj.id) } > < FaTrashAlt / > Delete < /button> <
                /li>
            )
        } <
        /div>
    )
}

export default ToDoList