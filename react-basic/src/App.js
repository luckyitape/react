import React, {createContext, useContext, useState} from "react";

const Context = createContext()

function  ComA() {
    const count =  useContext(Context);
    return(
        <div>
            <div>
            this is ComA
            </div>
            <div>
            {count}
            </div>
            <div>
            <ComC/>
            </div>
        </div>
    )
}


function  ComC() {
    return(
        <div>
            this is ComC
        </div>
    )
}

function App() {
    const [count,setCount] = useState(0)
    return(
        <Context.Provider value={count}>
          <div>
            <ComA />
            <div>
                <button onClick={()=>setCount(1)}>++</button>
            </div>
          </div>
        </Context.Provider>
    )
}


export default App