import { useState } from "react";

function Counter(props){
    const [count,setCount] = useState(()=>{
        return props.count
    })
    return (
        <button onClick={()=>setCount(count + 1)}>
            {count}
        </button>
    )
}

function App(){
    return(
        <Counter count={10}>

        </Counter>
    )
}


export default App