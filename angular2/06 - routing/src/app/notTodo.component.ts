import {Component, View} from "angular2/core";
import {NotTodoInput} from "./notTodoInput.component";
import {NotTodoList} from "./notTodoList.component";

@Component({
    selector:'not-todo', 
})
@View({
    directives: [NotTodoInput, NotTodoList],
    template: `
        <not-todo-input></not-todo-input>
        <not-todo-list></not-todo-list>
    `
})
export class NotTodo{}