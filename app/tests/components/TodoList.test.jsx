import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import $ from 'jquery';

import TodoList from 'TodoList';
import Todo from "../../components/Todo";

describe('TodoList', () => {
    it('should exist', () => {
        expect(TodoList).toExist()
    });

    it('should render a Todo component for each todo item', () => {
        let todos = [{
            id: 1,
            text: 'task1'
        }, {
            id: 2,
            text: 'task2'
        }];
        const todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
        const todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, Todo);

        expect(todosComponents.length).toBe(todos.length);
    });
});