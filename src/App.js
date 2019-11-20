import React, { useState } from 'react';
import Title from './components/Title'
import Todo from './components/Todo'
import InputComp from './components/InputComp'
import './App.css';

function App(){
    const [todos, setTodos] = useState([
      {
        id: 1,
        text: 'Drink Water',
        isCompleted: false
      },
      {
        id: 2,
        text: 'Learn 1 New Thing',
        isCompleted: false
      },
      {
        id: 3,
        text: 'Go Run',
        isCompleted: false
      },
    ])

    const addTodo = text => {
      const newTodos = [...todos, { text }];
      setTodos(newTodos);
    };

    const deleteTodo = id =>{
      let newTodos = [...todos]
      newTodos.splice(id, 1);
      setTodos(newTodos);
    }

    const completeTodo = id =>{
      let newTodos = [...todos];
      newTodos[id].isCompleted = true;
      setTodos(newTodos)
    }

  return (
    <div className="App">
      <header className="App-header">
        <Title title="get 💩 done."/>
        <InputComp addTodo={addTodo}/>
        {todos.map((todo, index, id) => {
        return(
          <Todo
          deleteTodo={deleteTodo}
          completeTodo={completeTodo}
          todo={todo}
          key={index}
          id={index}
          />
          )
        })}
      </header>
    </div>
  );
}

export default App;
