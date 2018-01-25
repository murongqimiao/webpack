// 函数组件 author: murongqimiao
import React from 'react';

const Input = (props) => {

    const holder = props.newToDo;

    const onChange = (event) => {
        props.onInputChange(event.target.value)
    }

    const onSubmit = (e) => {
        props.putSubmit(e)
    }

    return (
        <form>
            <div
                className="form-group">
                <label
                htmlFor="listInput">
                Email address
                </label>
                <input
                type="text"
                className="form-control"
                id="listItemInput"
                placeholder="place enter some word"
                value={ holder }
                onChange={onChange}
                />
                <button type="button"
                onClick={onSubmit}
                className="btn btn-primary">
                Add Item
                </button>
            </div>
        </form>
    )
}

export default Input