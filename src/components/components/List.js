import React from 'react'   // 每一个react 组件都需要引入react
// 函数型组件
const List = (props) => {

    const list = props.listItems.map((el, i) => (
        <li key={i} onClick={() => props.onListItemClik(i)}><h2>{el.item}</h2></li>
    ));

    return (
        <div>
            <ul>
                { list }
            </ul>
        </div>
    )
};

export default List;