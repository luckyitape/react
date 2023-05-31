import React from 'react';  // 框架的核心包
import ReactDOM from 'react-dom/client'; // 渲染的相关的包
// 应用的全局样式文件
import './index.css';
// 引入根组件
import App from './App';

// 渲染组件APP
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // 严格模式节点需要去掉
  // 影响useEffect的执行时机
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
);

