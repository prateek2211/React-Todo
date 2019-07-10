import React from 'react';
import Proptypes from 'prop-types';

class Addtodo extends React.Component {
    state = {
        todo: ""
    }
    save = (e) => {
        e.preventDefault()
        this.props.addTodo(this.state.todo)
        this.setState({ todo: "" })
    }
    onChange = (e) => {
        this.setState({
            [e.target.name]: [e.target.value]
        })
    }
    render() {
        return (
            <form onSubmit={this.save} style={{ display: 'flex' }}>
                <input type="text" name="todo" onChange={this.onChange} value={this.state.todo} style={{ flex: '10', padding: '5px' }} />
                <button style={{ flex: '1' }}>Submit</button>
            </form>
        )
    }
}
Addtodo.propTypes = {
    addTodo: Proptypes.func.isRequired
}
export default Addtodo