import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";


function ToDoEdit() {
    const { todoId } = useParams();
    const [editToDo, setEditToDo] = useState({})
    const navigate = useNavigate()
    //const handleChange = (e) => setEditToDo({ ...editToDo, [e.target.do]: e.target.value })

    async function getToDo() {
        try{
            let myToDo = await fetch(`http://localhost:4000/do/${todoId}`);
            myToDo = await myToDo.json()
            setEditToDo(myToDo);
        } catch(err) {
            console.log(err);
        }
    }
    useEffect(() => {
        getToDo();
    }, []);

    function handleChange(e) {
        setEditToDo((currentState) => ({
            ...currentState,
            do: e.target.value
        }))
    }
    async function handleSubmit(e) {
        //e.preventDefault()
        // console.log(editForm)
        try {
            e.preventDefault();
            await fetch(`http://localhost:4000/do/${todoId}`, {

            method: "PUT",
            headers: {
                 "Content-Type": "application/json"
                 },
            body: JSON.stringify(editToDo)
            });
            return navigate(`/todo`);
            } catch(err) {
                console.log(err)
            }

        } 
        return (
            <>
            <h1>Edit</h1>
            
            <h2>{editToDo.do}</h2>
                            <form onSubmit={handleSubmit}>
                                 <input type="text" value={editToDo.do} name="title" onChange={handleChange} />
                    
                                 <Button variant="secondary">Edit</Button>{' '}
                            </form> 
            </>
            
                )
        }
            
    
   
;



export default ToDoEdit;