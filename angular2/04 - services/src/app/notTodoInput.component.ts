import {Component, View} from "angular2/core";
import {FORM_DIRECTIVES} from "angular2/common";
import {NotTodoService} from "./notTodo.service";

/*
This lesson code shows how to use:
 - services
    - do service injection by constructor argument
	- use the public keyword to make it available to the rest of the component
	    - this is TypeScript sugar for declaring a more global var and assigning to that.
		
- use ngModel and ngSubmit
	- use () to bind stuff that goes out (that is, events)
	- use [] to bind stuff that goes inject
	- use [()] to set up two-way data binding (stuff that goes in as well as out)
*/

@Component({
	selector: 'not-todo-input'
})
@View({
	directives: [FORM_DIRECTIVES],
	template: `
		<form (ngSubmit)="onSubmit()">
			<input type="text" [(ngModel)]="notTodoModel">
		</form>
	`
})
export class NotTodoInput { 
	// the format below can be used if not using TypeScript
	// you also need to import 'Inject' from "angular2/core" to use the inject annotation.
	
	// notTodoService;
	// constructor(@Inject(NotTodoService) notTodoService) {
	// 	this.notTodoService = notTodoService;
	// }
	
	notTodoModel;
	
	constructor(public notTodoService: NotTodoService) {
		
	}
	
	onSubmit() {
		this.notTodoService.addNotTodo(this.notTodoModel);
	}
}