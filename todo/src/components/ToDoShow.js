import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
//import ToDo from "./ToDo";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';

function ToDoShow () {
    const [toDo, setToDo] = useState([]);
    //const [editToDo, setEditToDo] = useState("")

    const { todoId } = useParams();
    //const URL = `http://localhost:4000/do/${id}`
   // console.log(todoId);
    async function getToDo() {
        try{
            let myToDo = await fetch(`http://localhost:4000/do/${todoId}`);
            myToDo = await myToDo.json()
            setToDo(myToDo);
        } catch(err) {
            console.log(err);
        }
    }
   // console.log(`Current Person: ${JSON.stringify(toDo)}`)
    useEffect(() => {
           getToDo();
         }, [])
    
    return(
        <>
         <div className="do">
            <h1>My View</h1>
            <h2>{toDo.do}</h2>
           <Link to={`/${todoId}/edit`}><Button variant="success">Edit</Button>{' '}</Link><Link to={`/${todoId}/delete`}><Button variant="danger">DELETE</Button>{' '}</Link>
            </div>
        
        </>

    )




}
    
      

        export default ToDoShow;