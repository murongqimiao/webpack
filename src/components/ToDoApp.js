import React from 'react';       // 在所有的react组件中都需要引入react
import List from './components/List'
import Input from './components/Input'


class ToDoApp extends React.Component {
    onInputChange = (val) => {
        this.setState({ newToDo: val });
    }

    onListItemClik = (i) => {
        console.log('序数---->', i)
        this.setState((_) => {
            console.log(_);
            return{
                list: [
                    ..._.list.slice(0, i),
                    Object.assign({}, _.list[i], { done:!_.list[i].done }),
                    ..._.list.slice(i+1)
                ],
                newToDo: ''
            }  
        })
        // console.log(_.list)
    }

    putSubmit = (e) => {
        e.preventDefault();
        this.setState((_)=>({
            'list': [..._.list, { item: _.newToDo, done: false }],
            'newToDo': ''
        }));
    }

    componentWillMount() {
        this.setState({
            'list':[{ item: '小名', done: true }, { item: '小黄', done: true }, { item: '小兰', done: false }],
            'newToDo': 'test'
        })
    };
    render() {
        return(
            <div className="col-md-10 col-md-offset-1">
                <div className="panel panel-default">
                    <div className="panel-body">
                        <h1>My to do App</h1>
                        <hr/>
                        <List
                        onListItemClik={ this.onListItemClik }
                        listItems={ this.state.list }/>
                        <Input
                        newToDo={ this.state.newToDo }
                        onInputChange={this.onInputChange}
                        putSubmit={this.putSubmit}
                        />
                    </div>
                </div>
            </div>
        )
    }
}


export default ToDoApp
