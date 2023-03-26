import { fireEvent, render, screen, waitFor} from '@testing-library/react';
import { TodoItem } from '../../components/Todos/TodoItem';
import { addTodo } from '../../redux/reducer';
import { renderWithProviders } from './renderWithProviders';



describe('Test in TodoItem', () => {

  const todo = {
    id: 1,
    description: "Tarea 1",
    createdAt: "2023-03-26 17:30:34",
    active: true
  }

  test('should show the todo active', () => {
    renderWithProviders(<TodoItem todo={ todo } /> );
  
    const spanElement = screen.getByLabelText('span')
    expect( spanElement.innerHTML ).toBe(`<strong>Descripción:</strong> ${todo.description}, <strong>Creada:</strong> ${todo.createdAt}`)
    expect( spanElement.className ).toContain('align-self-center');
    expect( spanElement.className ).not.toContain('text-decoration-line-through');

  });
  test('should show the todo not active', () => {
    todo.active = false
    renderWithProviders(<TodoItem todo={ todo } /> );
    const spanElement = screen.getByLabelText('span')
    expect( spanElement.innerHTML ).toBe(`<strong>Descripción:</strong> ${todo.description}, <strong>Creada:</strong> ${todo.createdAt}`)
    expect( spanElement.className ).toContain('align-self-center');

  });  
});