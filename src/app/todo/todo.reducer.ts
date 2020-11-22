import * as fromTodo from './todo.actions';
import { Todo } from './model/todo.model';
import { EDITAR_TODO } from './todo.actions';

const todo1 = new Todo('hola');
const todo2 = new Todo('chau');
todo1.completado = true;

const estadoInicial: Todo[] = [todo1, todo2];

export function todoReducer(state = estadoInicial, action: fromTodo.Acciones): Todo[] {
  switch (action.type) {
    case fromTodo.AGREGAR_TODO:
      const todo = new Todo(action.texto);
      return [...state, todo];
    case fromTodo.TOGGLE_TODO:
      return state.map(todoEdit => {
        if (todoEdit.id === action.id) {
          return {
            ...todoEdit,
            completado: !todoEdit.completado
          };
        }
        return todoEdit;
      });
    case fromTodo.EDITAR_TODO:
      return state.map(todoEdit => {
        if (todoEdit.id === action.id) {
          return {
            ...todoEdit,
            texto: action.texto
          };
        }
        return todoEdit;
      });
    case fromTodo.TOGGLE_ALL_TODO:
      return state.map(todoEdit => {
        return {
          ...todoEdit,
          completado: action.completado
        };
      });
    case fromTodo.ELIMINAR_TODO:
      return state.filter(todoedit => todoedit.id !== action.id);
    case fromTodo.ELIMINAR_ALL_TODO:
      return state.filter(todoedit => !todoedit.completado);
    default:
      return state;
  }
}
