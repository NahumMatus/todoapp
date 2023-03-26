import { fireEvent, render, screen, waitFor} from '@testing-library/react';
import { TodoList } from '../../components/Todos/TodoList';
import { addTodo } from '../../redux/reducer';
import { renderWithProviders } from './renderWithProviders';



describe('Test in TodoItem', () => {

  const todos = [
    {
    id: 1,
    description: "Tarea 1",
    createdAt: "2023-03-26 17:30:34",
    active: true
    }
  ]

  

  test('should show the todo active', () => {
    const { store } = renderWithProviders(<TodoList todos={ todos } /> );
    console.log(store.getState().listReducers)
    screen.debug()

  });
  
});