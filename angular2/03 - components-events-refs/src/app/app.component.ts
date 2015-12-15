import {Component, View} from "angular2/core";
import {NotTodoInput} from "./notTodoInput.component";

@Component({
    selector:'app', 
})
@View({
    directives: [NotTodoInput],
    template: `
        <not-todo-input></not-todo-input>
    `
})
export class App{}