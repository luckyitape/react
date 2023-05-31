// react如何完成列表渲染
// 技术方案 map,重复渲染的是哪个模版 就return谁
// 注意事项：在遍历列表时需要一个类型为number/string不可重复的key 提高diff性能
// key仅仅在框架的内部使用，不会出现在真实的dom结构中

const songs = [
    {id:1, name:"痴心绝对"},
    {id:1, name:"像我这样的人"},
    {id:1, name:"南山南"},
  ]
  
  
  function App() {
    return (
      <div className="App">
        <ul>
          {songs.map(item=><li key={songs.id}>{item.name}</li>)}
        </ul>
      </div>
    );
  }
  
  export default App;
  