import { observer } from 'mobx-react';

const TodoListView = observer(({ todoList }) => {
  return (
    <div>
      <ul>
        {todoList.todos.map((todo) => (
          <TodoView todo={todo} key={todo.id} />
        ))}
      </ul>
      Task left: {todoList.unfinishedTodoCount}
    </div>
  );
});

const TodoView = observer(({ todo }) => {
  return (
    <li>
      <input
        type='checkbox'
        checked={todo.finished}
        onClick={() => todo.toggle()}
      />
      {todo.id}: {todo.title}
    </li>
  );
});

export default TodoListView;
