import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
function home() {
    return(
        <>
        
        
        <Link to={`/todo`}><Button variant="secondary">Home</Button>{' '}</Link>
       
        </>
    )
}

export default home;