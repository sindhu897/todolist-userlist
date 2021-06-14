import React,{useEffect, useState} from 'react'
import './App.css'

function App() {
  const [data,setData] = useState([])
  const [page,setPage] = useState(parseInt(1))

    useEffect( () => {
        getData(page)
      },[])

     const handlepage=(page)=>{
        setPage(page)
        getData(page)
      }
      const getData=(page)=>{
          console.log(page)
        fetch("https://reqres.in/api/users?page="+page+"", {
            method: "GET", // *GET, POST, PUT, DELETE, etc.
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json"
            },
            
          })
            .then(response => response.json())
            .then(resdata => {
               console.log(resdata.data)
              setData(resdata.data)
            })
      }
  return (
    
    <div className="container my-5">
        <h4 className="user-font"><span>Users List</span></h4>
        
        <div className="row mb-3 row-height">
            {data.map(data=>(

                <div className='col-md-4 my-2'>
                <div className="card bg-white h-100 p-3">
                    <div className="row">
                
                    <div className="col-sm-4">
                        <div className="image-view">
                    <img className="w-100" src={data.avatar} alt="..."/>
                    </div>
                    </div>
                    <div className="col-sm-8">
                        <p className="m-0 px-2 underline">Name:</p>
                        <p className="card-text m-0 p-2">{data.first_name+" "+data.last_name}</p>
                        <p className="m-0 px-2 underline">Email:</p>
                        <p className="card-text p-2">{data.email}</p>
                
                    </div>
           
            </div>
            
            </div>
            </div>
            ))}
            
            
    </div>
    <p className="text-right"> {page == 2 ? <span className="text-primary pointer" onClick={()=>handlepage(1)}>Prev {"<<"}</span>:""} Page: {page} {page == 1 ? <span className="text-primary pointer" onClick={()=>handlepage(2)}>{">> "}Next</span>:""}</p>
    </div>
  );
}

export default App;
