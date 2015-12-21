import {Component, View, Input} from "angular2/core";
import {NgClass} from "angular2/common";
import {NotTodoModel} from "./notTodo.service";

/*
This lesson code shows:
	- using the Input directive to set up 1-way binding on a component dependency
	- using the styles property and ng-class.
*/

@Component({
	selector: 'not-todo-item-renderer'
})
@View({
	styles:[`
		.inprogress {
			color: green
		}
		
		.completed {
			text-decoration: line-through;
		}
	`],
	template: `
		<div>
			<span [ngClass]="ntd.status">{{ntd.title}}</span>
			<button (click)="ntd.toggle()">Toggle</button>
		</div>
	`
})
export class NotTodoItemRenderer {
	@Input() ntd:NotTodoModel;
}