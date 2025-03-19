import { useState } from 'react'
import './App.css'
import Todo from './components/Todo.jsx'
import TodoList from './components/TodoList.jsx'

function App() {
  const [listTodo, setListTodo] = useState([]);
  let addList = (inputText) => {
    if (inputText === '') {
      return;
    }
    setListTodo([...listTodo, inputText]);
  }

  const deleteListItem = (key) => {
    let newListTodo = [...listTodo];
    newListTodo.splice(key, 1);
    setListTodo([...newListTodo]);
  }
   

  return (
    <div className="main-conatiner">
      <div className="center-container">
        < Todo  addList={addList}/>
        <h1 className="app-heading">TODO</h1>
        <hr />
        {listTodo.map((listItem, i) => (
          <TodoList key={i}  index={i} item={listItem} deleteItem={deleteListItem} />
        ))}
      </div>
    </div>
  )
}

export default App
