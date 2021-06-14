import React, { useState } from 'react'
import {Link} from 'react-router-dom'
function App() {
const [active,setActive] = useState(parseInt(1))

const activeItem=(i)=>{
    setActive(i)
    console.log(active)
}
  return (
    
    <div className="bg-nav p-3">
        <ul className="nav">
            <li className="nav-item" onClick={(e)=>activeItem(1)}>
                <Link className={active=== 1?"active nav-link text-white":"nav-link text-white"} to="/todo">Todo List</Link>
            </li>
            <li className="nav-item" onClick={(e)=>activeItem(2)}>
                <Link className={active===2?"active nav-link text-white":"nav-link text-white"} to="/userlist">User List</Link>
            </li>
        </ul>
    </div>
  );
}

export default App;
