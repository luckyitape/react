import React, { createContext } from "react";
// App -> A -> C
// 上层组件和下层组件是相对的，通常我们会通过app作为数据提供方
// 把App的数据传给C
// 导入createContext并执行
const { Provider, Consumer } = createContext()
function ComA() {
    return (
        <div>
            this is ComA
            <ComC />
        </div>
    )
}

function ComC() {
    return (
        // 通过Consumer使用元素
        <div>
            this is ComC
            <Consumer>{value => <spam>{value}</spam>}</Consumer>
        </div>
    )
}


class App extends React.Component {
    state = {
        message: "this is message"
    }
    render() {
        return (
            // 使用Provider包裹根组件
            <Provider value={this.state.message}>
                <div>
                    {/* 子组件身上绑定属性  属性名可以自定义  保持语义化*/}
                    <ComA />
                </div>
            </Provider>
        )
    }
}


export default App
