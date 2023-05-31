// context如果传递的数据，只需要在整个应用初始化的时候传递一次就可以
// 那么选择在当前index.js文件做数据提供

// 如果context传递数据，而且需要修改  底层组件也要跟着一起修改，那么写到app.js文件里面

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