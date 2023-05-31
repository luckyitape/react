import { useEffect, useState } from "react";

// 在数据修改之后，把count值放在页面标题中
// 1.导入useEffect数据
// 2.在函数组件中执行 传入回调  并且自定义副作用
// 3.当我们通过修改状态更新组件时，副作用也会不断的执行

// 依赖控制副作用的执行时机
// 1.默认状态(无依赖项)
// 2.组件初始化的时候先执行一次， 每次数据修改的时候更新再次执行
// 3.添加依赖项，如果为空数组，首次初始化会渲染一次
// 4.依赖特定项  空数组里面添加即可 [count]
// 组件的初始化时候执行一次  依赖的特定项发生变化会再次执行

// 注意事项
// 只要是在useEffect回调函数中用到的数据状态就应该出现在依赖项数组中，否则可能有bug

function App(){
    const [count,setCount] = useState(0);
    const [name,setName] = useState('xu');
    useEffect(()=>{
        console.log('副作用执行了');
        document.title = count
    },[count,name])
    // 什么时候会执行副作用函数
    // 初始化  和   count/name修改时会执行

    return (
        <div>
            <button onClick={()=>setCount(count + 1)}>{count}</button>
            <button onClick={()=>setName('cp')}>{name}</button>
        </div>
    )
}


export default App