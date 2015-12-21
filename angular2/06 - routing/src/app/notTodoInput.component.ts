import {Component, View} from "angular2/core";
import {FORM_DIRECTIVES} from "angular2/common";
import {NotTodoService, NotTodoModel} from "./notTodo.service";

@Component({
	selector: 'not-todo-input'
})
@View({
	directives: [FORM_DIRECTIVES],
	template: `
		<form (ngSubmit)="onSubmit()">
			<input type="text" [(ngModel)]="notTodoModel.title">
		</form>
	`
})
export class NotTodoInput { 
	notTodoModel: NotTodoModel = new NotTodoModel();
	
	constructor(public notTodoService: NotTodoService) {
		
	}

	onSubmit() {
		this.notTodoService.addNotTodo(this.notTodoModel);
		this.notTodoModel = new NotTodoModel();
	}
}