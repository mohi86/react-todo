import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import $ from 'jquery';

import TodoApp from 'TodoApp';

describe('TodoApp',() => {
    it('should exist', () => {
        expect(TodoApp).toExist()
    });

    it('should add todo to todos state on handleAddTodo', () => {
       let todoText = 'test text';
       const todoApp = TestUtils.renderIntoDocument(<TodoApp/>);

       todoApp.setState({todos:[]});
       todoApp.handleAddTodo(todoText);

       expect(todoApp.state.todos[0].text).toBe(todoText);
    });

    it('should toggle completed value on handleToggle', () => {
        let todoData = {
            id: 11,
            text: 'test toggle',
            completed: false
        };

        const todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
        todoApp.setState({
            todos: [todoData]
        });

        expect(todoApp.state.todos[0].completed).toBe(false);

        todoApp.handleToggle(11);
        expect(todoApp.state.todos[0].completed).toBe(true);
    });
});