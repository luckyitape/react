// hooks
// 1.针对函数组件来使用的
// 2.告别难以理解的class
// 3.解决业务逻辑难拆分的问题
// 4.方便状态逻辑复用
// 5.更符合UI = f(data)
// 注意：1.hooks和class共存
//      2.hooks只能在函数组件中使用

// 1.useState  为函数组件提供数组状态的
/**写法
 * const [count,setCount] = useState("")
 * count: 数据状态
 * setCount 修改数据对应的方法
 */
/**注意点
 * 1.useState的初始参数只会在首次渲染的时候使用,再次更新时会被忽略
 * 2.每次通过setCount修改的状态会引起组件的重新渲染
 * 3.useState可以调用多次，每次都是独立的
 * 4.useState不可以在除了函数组件之外的地方，比如分支语句，循环语句，内部函数中执行
 * 5.如果初始值需要计算才能得到可以使用回调的写法来确定useState的初始值
 */

// 2.useEffect 为react组件提供副作用的处理
/**
 * 什么是副作用？ 函数组件的副作用是通过数据渲染UI，除了这个之外的操作就是副作用
 * 1.ajax请求
 * 2.手动修改dom
 * 3.localStorage
 */
/** 依赖想控制执行时机
 * 1.默认状态 ： 首次执行 + 每次组件更新执行
 * 2.添加空[] : 首次执行
 * 3.添加特定的依赖项目[count，name] ，首次执行 + 依赖项变化执行
 */
/** 清理副作用
 *    useEffect(()=>{
 *       return ()=>{
 *           //清理副作用
 *       }
 *    })
 */

// 3.useRef 获取真实的dom或者组件的实例对象
/** 实现步骤
 * 1.导入useRef函数
 * 2.执行useRef函数并且传入一个null，返回值为一个对象，内部有一个current属性存放dom对象/组件实例
 * 3.通过ref做一个绑定获取元素或者组件
 */

// 4.useContext 在hooks下如何跨组件传递数据
/**
 * 1.使用createContext 创建ConText对象
 * 2.在顶层组件通过ConText.Provider提供数据  <ConText.Provider value={}></ConText.Provider>
 * 3.在底层通过useContext(ConText)函数获取数据  const count = useContext(ConText)
 * 补充
 * 1.如果提供的数据是静态不变的  可以放在index.js里面做传出
 * 2.如果提供的数据是需要变化，可以在app.js里面方便更改数据
 */
