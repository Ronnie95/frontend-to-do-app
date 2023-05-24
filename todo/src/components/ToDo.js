import React from "react";
import { useState } from "react";


function ToDo() {
    const [doIt, setDoIt] = useState('')
    return (
<>
<form>
    <label>
        <input type ="text"  placeholder="What do you need to do?"
            value={doIt}
            onChange={(e) => setDoIt(e.target.value)} />
        <input type ="submit" text="do it" />
    </label>  
        
        
</form>

</>
        
        
    
    )
}

export default ToDo;