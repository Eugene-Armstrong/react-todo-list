import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './todo.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { items: [], text: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.text.length) {
      return;
    }
    const newItem = {
      text: this.state.text,
      id: Date.now()
    };
    this.setState(prevState => ({
      items: prevState.items.concat(newItem),
      text: ''
    }));
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div class="container">
          <div>
            <h2>React To Do List</h2>
            <p>
              <em>Simple Todo List with adding and filter by diff status.</em>
            </p>
          </div>
          <div>
            <input class="input-text" type="text" name="ListItem" 
              onChange={this.handleChange}
            value={this.state.text}/>
            <div id="button" onClick={this.handleSubmit}>Add</div>
          </div>
          <br />
          <ListItems items={this.state.items} />
          <div>
            <ul id="filters">
              <li>
                <a href="javascript:" data-filter="all" class="selected">ALL</a>
              </li>
              <li>
                <a href="javascript:" data-filter="active" class="">Active</a>
              </li>
              <li>
                <a href="javascript:" data-filter="complete" class="">Complete</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

class ListItems extends Component{
  render(){
    return (
      <ol id="list-box">
        {this.props.items.map(item => (
          <li key={item.id} class="list-item">
            <input name="done-todo" type="checkbox" class="done-todo"/>
            {item.text}
          </li>
        ))}
      </ol>
    );
  }
}
export default App;
