import React from 'react';
import Todos from './components/Todos'
import './App.css';
// import uuid from 'uuid';
import Addtodo from './components/Addtodo';
import Header from './components/layouts/Header';
import About from './components/pages/About';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';

class App extends React.Component {
  state = {
    todos: []
  }
  onComplete = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.isCompleted = !todo.isCompleted
        }
        return todo
      })
    })
  }
  addTodo = (title) => {
    axios.post('https://jsonplaceholder.typicode.com/todos', {
      title,
      isCompleted: false
    }).then((resp) => {
      this.setState({todos:[...this.state.todos, resp.data]})
    })
  }
  delete = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`).then((resp)=>{
      this.setState({
        todos: [...this.state.todos.filter((todo) => todo.id !== id)]
      })
    })
  }
  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10').then((resp) => {
      this.setState({ todos: resp.data })
    })
  }
  render() {
    return (
      <div className="App">
        <Router>
          <Header />
          <Route path="/about" component={About} />
          <Route exact path="/" render={(props) => (
            <React.Fragment>
              <Addtodo addTodo={this.addTodo} />
              <Todos todos={this.state.todos} onComplete={this.onComplete} delete={this.delete} />
            </React.Fragment>
          )
          } />
        </Router>
      </div>
    );
  }
}

export default App;
