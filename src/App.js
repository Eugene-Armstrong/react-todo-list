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
      alert("添加项内容不能为空！")
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
        <div className="container">
          <div>
            <h2>React To Do List</h2>
            <p>
              <em>Simple Todo List with adding and filter by diff status.</em>
            </p>
          </div>
          <div>
            <input className="input-text" type="text" name="ListItem" 
              onChange={this.handleChange}
            value={this.state.text}/>
            <div id="button" onClick={this.handleSubmit}>Add</div>
          </div>
          <br />
          <ListItems items={this.state.items} />
          <div>
            <FilterButtons />
          </div>
        </div>
      </div>
    );
  }
}

class ListItems extends Component{
  constructor(props) {
    super(props);
    this.handleCheck = this.handleCheck.bind(this);
    this.handleDoubleClick = this.handleDoubleClick.bind(this);
  }
  //复选框勾选
  handleCheck(e){
    if(e.target.checked){
      e.target.parentNode.classList.add("checked");
    }else{
      e.target.parentNode.classList.remove("checked");
    }
  }
  //处理双击可编辑
  handleDoubleClick(e){
    e.target.setAttribute("contentEditable",true);
  }
  render(){
    return (
      <ol id="list-box">
        {this.props.items.map(item => (
          <li key={item.id} className="list-item" onDoubleClick={this.handleDoubleClick}>
            <input name="done-todo" type="checkbox" className="done-todo" onClick={this.handleCheck}/>
            {item.text}
          </li>
        ))}
      </ol>
    );
  }
}

class FilterButtons extends Component{
  render(){
    return(
      <ul id="filters">
              <li>
                <a href="javascript:" data-filter="all" className="selected">ALL</a>
              </li>
              <li>
                <a href="javascript:" data-filter="active" className="">Active</a>
              </li>
              <li>
                <a href="javascript:" data-filter="complete" className="">Complete</a>
              </li>
            </ul>
    )
  }
}
export default App;
