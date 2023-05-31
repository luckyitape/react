import React,{useEffect, useRef} from "react";

//  组件实例  类组件
// dom对象  标签

class TestC extends React.Component{
    render(){
        return (
            <div>
                我是类组件
            </div>
        )
    }
}

function App() {
    const testRef =  useRef(null)
    const h1Ref =  useRef(null)

    useEffect(()=>{
        console.log(testRef.current)
        console.log(h1Ref.current)
    },[])
    // useEffect回调  是在dom渲染之后还是之前？
    // 和vue里面的watch 效果很像，但是时机是不同的
    return (
        <div>
            <TestC ref={testRef}/>
            <h1 ref={h1Ref}>this is h1</h1>
        </div>
    )
}

export default App
