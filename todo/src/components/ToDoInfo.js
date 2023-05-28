import React from "react";
import { useEffect, useState } from "react";

function ToDoInfo() {
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

    return(
<>

<div>
    <h1>hello guys</h1> 
 </div>  

<section>
{toDoInfo.map((doIt, idx) => {
    console.log(doIt)
    return(
    <div key={idx}>
            <toDoInfo doIt={doIt} />
            <ul>
                <li>{doIt.do}</li>
            </ul>
     </div>
    )
})}

</section>


</>
       

    );

    }

    export default ToDoInfo;