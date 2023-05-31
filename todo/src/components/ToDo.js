import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';



function ToDo() {
    const [toDoForm, setToDoForm] = useState({
        do: "", 
    })

    const [toDoInfo, setToDoInfo] = useState([])
    
    useEffect(() => {
       

        const fetchToDoInfo = async () => {
          
            try {
               
                const response = await fetch("http://localhost:4000/do");
                //const response = await fetch("https://todolist-b60d.onrender.com");
                const toDoData = await response.json();
                setToDoInfo(toDoData);
            } catch (error) {
                
            }
        };
        fetchToDoInfo();
    }, []);

    function handleChange(e) {
        setToDoForm((previousFormState) => ({
            ...previousFormState,
            do: e.target.value
        }))
    }
    
    // interacting with my database
    async function handleSubmit(e) {
        // prevent reloading
        e.preventDefault();
        try{
            const myToDo = await fetch("http://localhost:4000/do", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(toDoForm)
            })
            const myToDoString = await myToDo.json()
            // calling this function with array and string
            setToDoInfo([...toDoInfo, myToDoString]);

           console.log(myToDoString)
        } catch(err){
            console.log(err)
        }
    }


    return (
<>
<section>

<form className="f"onSubmit={handleSubmit}>
    <input 
        type ="text"
        value={toDoForm.do}
        placeholder="What do you need to do?"
        onChange={handleChange}
        />
   <input type ="submit" value="Do It" />
  
</form>
{toDoInfo.map((doIt, idx) => {
   
  //  console.log(doIt)
    return(
    <div key={idx}>
            <toDoInfo doIt={doIt} />
        <table>
            <tr>
            <td className="td">{doIt.do}</td>
            </tr><Link to={`/${doIt._id}`}> <Button variant="outline-secondary">View</Button>{' '}</Link><Link to={`/${doIt._id}/edit`}> <Button variant="success">Edit</Button>{' '}</Link><Link to={`/${doIt._id}/delete`}>   <Button variant="danger">DELETE</Button>{' '}</Link>
           
        </table>
      
     </div>
    )
})}

</section>


</>
        
        
    
    )
};

// const handleChange = (e) => {
//     setToDoForm({...toDoForm, [e.target.do]: e.target.value});
// };
// const createToDoInfo = async (ToDoInfo) => {
//     try {

//         // make post request to create people
// const newPerson = await fetch("http://localhost:4000/do", {
//     method: "post",
//     headers: {
//         "Content-Type": "application/json",
//     },
//         body: JSON.stringify(ToDoInfo),
// });

//         // testing API create request
//     // console.log(await newPerson.json())

//         // trigger fetch of updated People to replace stale content
//         getToDoInfo()

//     } catch (err) {
//         console.log(err)
        
//     }

// };

// const handleSubmit = async (e) => {
    
// 		e.preventDefault()
//     const newPerson = await createPeople()

// 		// reset the form
//     setNewForm({ name: "", image: "", title: "" })
// }



export default ToDo;