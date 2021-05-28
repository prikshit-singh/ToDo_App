import React from 'react';
import './list.css'
 function List(props){
     

   return(
       <>
       
         <li className="list1">{props.name}</li>
         <button className="btn" type="button" onClick={()=>{props.onSelect(props.id);}}>delete</button>
         
       </>
   )  
 }


 export default List;