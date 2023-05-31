// useState


// 1.导入useState函数
// 2.执行这个函数并且传入初始值   必须在函数组件中
// 3.【数据，修改数据】
// 4.使用数据，修改数据

// 首次渲染
// 首次渲染的时候，组件内部的代码会执行一次
// 其中useState也会跟着执行  这是重点注意的  初始值只是首次渲染会执行


// 更新渲染   setCount都更新
// 1.app组件会再次渲染  这个函数会再次执行
// 1.useState再次执行  得到新的count值不是0而是修改之后的1  模版会用新值渲染

// 注意：useState初始值只是在首次渲染生效  后续只要调用setCount整个app中的代码都会执行
// 此时的count每次都拿的都是最新值

import { useState } from "react"
function App() {
    const [count,setCount] = useState(0)
    // [count,setCount]  这里的写法是解构赋值   useState返回值是一个数组
    // 名字可以自定义  -》 可以自定义保持义话
    // 顺序可以换吗？  不可以的  第一个参数就是数据状态  第二个参数是修改数据的方法
    // setCount函数  作用来修改count  依旧保持不能修改原值  还是生成一个新值来替换
    // setCount(基于某原值计算得到的新值)
    // count和setCount是一对的，只能setCount只能修改count的值
    return(
        <div>
            {count}
            <button onClick={()=>setCount(count+1)}>加一</button>
        </div>
    )
}


export default App