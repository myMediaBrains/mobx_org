import Todo from './components/Todo';
import TodoList from './components/TodoList';
import TodoListView from './components/TodoListView';

const store = new TodoList([
  new Todo('Get coffee'),
  new Todo('Write simpler code'),
]);

function App() {
  return (
    <div>
      <TodoListView todoList={store} />
    </div>
  );
}
export default App;
