import React from "react";


// 渲染列表
function ListItem({item,deleteHandler}) {
    return (
        <>
            <h3>{item.name}</h3>
            <p>{item.price}</p>
            <p>{item.info}</p>
            <button onClick={()=>deleteHandler(item.id)}>删除</button>
        </>
    )
}

// 数据提供者  渲染ListItem组件
// 先不抽离组件，完成渲染之后再去抽离
class App extends React.Component {
    state = {
        list: [
            { id: 1, name: '鸡腿1', price: 11.2, info: "好吃1" },
            { id: 2, name: '鸡腿2', price: 11.2, info: "好吃2" },
            { id: 3, name: '鸡腿3', price: 11.2, info: "好吃3" }
        ]
    }

    deleteHandler = (id)=>{
        this.setState({
            list: this.state.list.filter(item=>item.id !== id)
        })
    }
    render() {
        return (
            <div>
                {this.state.list.map(item => <ListItem item={item} key={item.id} deleteHandler={this.deleteHandler}/>)}
            </div>
        )
    }
}


export default App
