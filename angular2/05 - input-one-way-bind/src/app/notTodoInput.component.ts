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
	
	ngOnDestroy() {
		// for example, do clean up, cancel async requests, etc.
		
		// see https://angular.io/docs/ts/latest/guide/lifecycle-hooks.html
		// for a full list of lifecycle hooks
	}
	
	onSubmit() {
		this.notTodoService.addNotTodo(this.notTodoModel);
		this.notTodoModel = new NotTodoModel();
	}
}