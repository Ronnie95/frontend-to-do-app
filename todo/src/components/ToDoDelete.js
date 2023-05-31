import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Button } from "react-bootstrap";

function ToDoDelete() {
    const {todoId} = useParams();

    async function removeToDo() {
        //console.log("fi")
        try {
            // Make an API call to the DELETE route!
            await fetch(`http://localhost:4000/do/${todoId}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                }
            })
        } catch(err) {
            console.log(err);
        }
    }

    return (
        <>
            <h2>Do you want to delete?</h2>
            
                <Link to={`/todo`}><Button variant="danger" onClick={removeToDo}>YES</Button></Link>
                
        
            <Link to={`/${todoId}`}>
            <Button variant="success">NO</Button>{' '}

            </Link>
        </>
    )
}

export default ToDoDelete;