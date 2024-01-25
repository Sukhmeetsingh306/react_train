//import Login from './components/login';
import Title from './components/Title';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
export default function App() {
  const todolist = [
    // {
    //   name: 'computer',
    //   desc: 'Computer adsoihsd'
    // }
  ]
  return (
    <>
      <div className="shadow p-3 mb-5 bg-body-tertiary rounded container">
        <center>
          <Title />
          <AddTodo />
          <br />
          <TodoList todol = {todolist}/>
        </center>
      </div>
    </>
  );
}
