import React,{useEffect, useState} from 'react'

function App() {
  const [todo,setTodo] = useState([
    {
      id:Math.random(),
      task:"Buy a gift",
    },
    {
      id:Math.random(),
      task:"Go to work",
    },
    {
      id:Math.random(),
      task:"Call Rachel",
    },
    {
      id:Math.random(),
      task:"Book a mobile",
    },
  ]);
  const [task,setTask]=useState('')
  const [del,setDel] = useState([])

useEffect(()=>{
  console.log(del)
})
  const addTodo=()=>{

    if(task !== '' ){
      const addtodo = {
        id :  Math.random(),
        task : task,
      };
  
      // Update list
      const tasklist = [...todo];
      console.log(tasklist)
      tasklist.push(addtodo);
  console.log(tasklist)
      // reset state
      setTodo(tasklist)
      setTask('')
    }
  }

  const remove=(e,id,task)=>{
    let idn=[...del]
    const data = {
      id: id,
      task: task
    }
    idn.push(data)
    setDel(idn)
    console.log(del)
    let rem = todo.filter(task=>task.id!==id)
    setTodo(rem)
  }

  return (
    
    <div className="container con w-50 my-5">
      <h4><span>Todo List</span></h4>
      <div className="d-flex mb-3">
      <input type="text" className="form-control w-50 m-10" value={task} onChange={(e)=>setTask(e.target.value)} placeholder="ex: buy a book"/> 
      <button type="submit" className=" btn btn-outline-dark m-10" onClick={()=>addTodo()}>Add</button>
      </div>
      <ul>
        {todo.map(task=>(
        <li onClick={(e)=>remove(e,task.id,task.task)} className="pointer">{task.task} <hr/></li>
        ))}
      </ul>
      <ul>
        {del.map(task=>(
         
         <li><del>{task.task} </del><hr/></li>
         
        ))}
      </ul>
        </div>
    // </div>
  );
}

export default App;
