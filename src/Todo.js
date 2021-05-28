import React, { useState } from 'react';
import List from './List';
import './todo.css';


function Todo(){
    const[task,setTask]=useState("")
    const[ntask,nsetTask]=useState([])

const add = (e)=>{
    var a=e.target.value;
    setTask(a);  
}


const add1 = ()=>{
    nsetTask((val)=>{
        return [...ntask, task]
    });
    setTask('')
}

const del = (id)=>{
    console.log("deleted")
    nsetTask((item)=>{
        return item.filter((arr,ind)=>{
            return id!==ind;
        })
    })
    
}

    return(
        <>
        <div className="main_div">
        <input type="text"
        className="add_input"
        placeholder="Enter Task"
        value={task}
        name="todo"
        onChange={add}
        ></input>
        
        <button className="add_button" onClick={add1}>add</button>
        </div>
        <div className="sec_div">
        <ol>
        {/* {ntask.map((e)=>{
        return <li>{e}</li>
        })} */}
       {ntask.map((e,index)=>{return  <List name={e}
       key={index}
       id={index}
       onSelect={del}
       
      
       />})
       

       }
        </ol>
        </div>
        </>
    )
};


export default Todo;