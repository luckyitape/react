import { useEffect, useState } from "react";

function Test() {
    useEffect(()=>{
       let timer =  setInterval(()=>{
          console.log('定时器执行了');
        },1000)
        return () =>{
            clearInterval(timer)
        }     
    },[])
    return(
        <div>
            this is test
        </div>
    )
}

function App(){
    const [flag, setFlag] = useState(0)
    return(
        <div>
            {flag?<Test/>:null}
            <button onClick={()=>setFlag(!flag)}>
                switch
            </button>
        </div>
    )
}


export default App