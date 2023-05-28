import React from "react";
import { useState } from "react";


function ToDo() {
    const [toDoForm, setToDoForm] = useState({
        do: "", 
    })

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
            console.log(myToDo)
        } catch(err){
            console.log(err)
        }
    }


    return (
<>
<section>

<form onSubmit={handleSubmit}>
    <input 
        type ="text" 
        value={toDoForm.do}
        placeholder="What do you need to do?"
        onChange={handleChange}
        />
    <input type ="submit" value="do it" />
  
</form>
 
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