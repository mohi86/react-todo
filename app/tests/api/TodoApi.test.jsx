import expect from 'expect';
import TodoApi from 'TodoApi';

describe('TodoApi', () => {
    beforeEach(() => {
       localStorage.removeItem('todos');
    });

   it('should exist', () => {
       expect(TodoApi).toExist();
   });

    describe('setTodos', () => {
        it('should set valid todos array', () => {
            const todos = [{
                id: 23,
                text: 'test',
                completed: false
            }];

            TodoApi.setTodos(todos);
            const actualTodos = JSON.parse(localStorage.getItem('todos'));

            expect(actualTodos).toEqual(todos);
        });

        it('should not set if invalid todos array', () => {
            const badTodos = {a: 'b'};
            TodoApi.setTodos(badTodos);

            expect(localStorage.getItem('todos')).toBe(null);
        });
    });

    describe('getTodos', () => {
        it('should return empty array for bad localstorage data', () => {
           const actualTodos = TodoApi.getTodos();
           expect(actualTodos).toEqual([]);
        });

        it('should return todos if valid array in localstorage', () => {
            const todos = [{
                id: 23,
                text: 'test',
                completed: false
            }];
            localStorage.setItem('todos', JSON.stringify(todos));

            const actualTodos = TodoApi.getTodos();
            expect(actualTodos).toEqual(todos);
        });
    });
});