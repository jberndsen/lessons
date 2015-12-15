import {Component, View} from "angular2/core";
import {NotTodoService} from "./notTodo.service";

/*
This lesson code shows how to use:
 - services
    - do service injection by constructor argument
	- use the public keyword to make it available to the rest of the component
	    - this is TypeScript sugar for declaring a more global var and assigning to that.
*/

@Component({
	selector: 'not-todo-input'
})
@View({
	template: `
		<input type="text" #ntdinput>
		<button (click)="onClick(ntdinput)">Log input</button>
	`
})
export class NotTodoInput { 
	// the format below can be used if not using TypeScript
	// you also need to import 'Inject' from "angular2/core" to use the inject annotation.
	
	// notTodoService;
	// constructor(@Inject(NotTodoService) notTodoService) {
	// 	this.notTodoService = notTodoService;
	// }
	
	constructor(public notTodoService: NotTodoService) {
		
	}
	
	onClick(ref) {
		this.notTodoService.addNotTodo(ref.value);
		console.log(this.notTodoService.notTodos);
	}
}