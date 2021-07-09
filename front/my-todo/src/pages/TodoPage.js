import React from 'react';
import CalendarTemplate from '../components/todo/CalendarTemplate';
import TodoForm from '../components/todo/TodoForm';
import TodoTemplate from '../components/todo/TodoTemplate';
const TodoPage = () => {
  return (
    <div>
      <TodoTemplate>
        <CalendarTemplate></CalendarTemplate>
        <TodoForm></TodoForm>
      </TodoTemplate>
    </div>
  );
};

export default TodoPage;
