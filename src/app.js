import React from 'react';
import ReactDOM from 'react-dom';
import ToDoApp from './components/ToDoApp'

// 第一个react组件
class App extends React.Component {
    render(){ // 每个react的组件都要经过渲染
      return( // 渲染内部返回一个jsx进行js与html混写
        <div>
            Hello World
        </div>
      );
    }
  }
  
ReactDOM.render(<ToDoApp />, document.getElementById('app'));

