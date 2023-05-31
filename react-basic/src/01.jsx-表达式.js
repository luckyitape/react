const name = "常常"

const getAge = ()=>{
  return 18
}


const flag = true

function App() {
  return (
    <div className="App">
      { name }
      { getAge() }
      { flag? '真棒':'真菜' }
    </div>
  );
}

export default App;
