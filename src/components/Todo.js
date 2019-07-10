import React from 'react'
class Todo extends React.Component {
    setStyle = () => {
        return {
            textDecoration: this.props.todo.isCompleted ? 'line-through' : 'none',
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
        }
    }
    render() {
        return (
            <div style={this.setStyle()}>
                <input type="checkbox" onChange={this.props.onComplete.bind(this, this.props.todo.id)} />{' '}
                {this.props.todo.title}
                <button style={btnStyle} onClick={this.props.delete.bind(this,this.props.todo.id)}>x</button>
            </div>
        )
    }
}
const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '5px 9px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}

export default Todo