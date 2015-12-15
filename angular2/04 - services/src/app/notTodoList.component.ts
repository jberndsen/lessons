import {Component, View} from "angular2/core";
import {NgFor} from "angular2/common";
import {NotTodoService} from "./notTodo.service";

/*
This lesson code shows how to use:
 - the NgFor directive for repeating over items
*/

@Component({
	selector: 'not-todo-list'
})
@View({
	directives: [NgFor],
	template: `
		<div>
			<div *ngFor="#ntd of notTodoService.notTodos">
				{{ntd}}
			</div>
		</div>
	`
})
export class NotTodoList {
	constructor(public notTodoService: NotTodoService) {
		
	}
}