import React from 'react'
import Todo from './Todo';
class Todos extends React.Component {
    render() {
        return (
            <div>
            { this.props.todos.map((todo)=>(
                <Todo key={todo.id} todo={todo} onComplete={this.props.onComplete} delete={this.props.delete}/>
            )) }
            </div>
        )
    }
}
export default Todos