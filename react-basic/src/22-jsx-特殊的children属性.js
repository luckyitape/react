import React from "react";


// 渲染列表
function ListItem({children}) {
    return (
        <div>
            ListItem
            {
                children.map((child) => child)
            }
        </div>
    )
}

// 数据提供者  渲染ListItem组件
// 先不抽离组件，完成渲染之后再去抽离
class App extends React.Component {
    render() {
        return (
            <div>
                <ListItem>
                    <div>this is div</div>
                    <p>this is p</p>
                </ListItem>
            </div>
        )
    }
}


export default App
