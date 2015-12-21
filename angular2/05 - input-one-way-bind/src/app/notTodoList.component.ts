import {Component, View} from "angular2/core";
import {NgFor} from "angular2/common";
import {NotTodoService} from "./notTodo.service";
import {NotTodoItemRenderer} from "./notTodoItemRenderer";

@Component({
	selector: 'not-todo-list'
})
@View({
	directives: [NgFor, NotTodoItemRenderer],
	template: `
		<div>
			<not-todo-item-renderer
			*ngFor="#ntd of notTodoService.notTodos"
			[ntd]="ntd"
			>
			</not-todo-item-renderer>
		</div>
	`
})
export class NotTodoList {
	constructor(public notTodoService: NotTodoService) {
		
	}
}