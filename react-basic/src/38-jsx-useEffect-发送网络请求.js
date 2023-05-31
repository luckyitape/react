//  类组件发生网络请求
// 生命周期钩子函数  componentDidMount
// 执行时机？
// 在初始化的时候dom渲染会执行一次

import {
    useEffect
} from "react";

// useEffect
// 1.不加依赖想   初始化 + 重新渲染  会执行
// 2.加一个空的依赖想  只会在初始化执行一次
// 3.加上名确的依赖想[count,name]  -  首次执行 + 任意一个变化执行


function App() {
    useEffect(() => {
        //    async function loadData() {
        //         const res = await fetch('http://geek.itheima.net/v1_0/channels')
        //         console.log('res', res);
        //     }
        function loadData() {
            fetch('http://geek.itheima.net/v1_0/channels').then(res => res.json()).then(data => console.log(data))
        }
        loadData()
    }, [])
}

export default App