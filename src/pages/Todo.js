import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const getLocalItems=()=>{
  const list=localStorage.getItem('todos')
  if(list){
    return JSON.parse(localStorage.getItem('todos'))
  } else{
    return []
  }
}
const Todo = () => {
  const [inputData, setInputData]=useState('')
  const [items, setItems]= useState(getLocalItems())
  const [toget, setToget]=useState(true);
  const [editId, setEditId]=useState(null);
  
  const addItem=()=>{
    if(!inputData){
      toast.error('Please Fill the Data');
    } else if(inputData && !toget){
         setItems(items.map((curElm)=>{
         if(curElm.id===editId){
            return{...curElm, name:inputData}
         }
         return curElm;
        
       })
       
      )
      setToget(true)
      setInputData('');
      setEditId(null)
    }
     else{
      const allInputData={id:new Date().getTime().toString(), name:inputData}
      setItems([...items, allInputData])
      toast.success('Todo Update Successfully');
      setInputData('');
    }
     
  }

  const editItem=(id)=>{
   let newEditItem= items.find((curElm)=>{
       return curElm.id===id
       
   })

   setToget(false);
   setInputData(newEditItem.name);
   setEditId(id);
   
  }


  const deleteTodo=(todo)=>{
   let data= items.filter((curElm)=>{
      return todo!==curElm.id;
    })

    setItems(data)
  }



  const clearTodo=()=>{
    setItems([])
    toast.error('Todo List Clear Successfully')
  }
  
  useEffect(()=>{
    localStorage.setItem('todos', JSON.stringify(items))
  }, [items]);
  return (
   <>
    <input type='text' name='todo' className='form-control mt-3 todo_input_style' id='todo' placeholder='Enter todo' value={inputData} onChange={(e)=>setInputData(e.target.value)} autoComplete='off' />
    {
      items.map((curElm)=>{
      
        return(
          <>
          <div className="show_todos" key={curElm.id}>
            <p className='text-capitalize fw-bold mb-0'>{curElm.name} </p>
            <span>
              <button className='btn btn-primary btn-sm me-2' onClick={()=>editItem(curElm.id)} >Edit</button>
              <button className='btn btn-danger btn-sm' onClick={()=>deleteTodo(curElm.id)}>Del</button>
            </span>
            
          </div>
          <ToastContainer />
          </>
        )
      })
    }
    {
      toget ? <button className='btn btn-success mt-3' onClick={addItem}>AddTodo</button>:
      <button className='btn btn-success mt-3' onClick={addItem}>UpdateTodo</button>
    }
    
    <button className='btn btn-success mt-3 ms-3' onClick={clearTodo}>ClearTodo</button>
   </> 
  )
}

export default Todo