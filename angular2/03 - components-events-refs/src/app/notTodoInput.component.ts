import {Component, View} from "angular2/core";

/*
This lesson code shows how to use:
 - events
    - put between parentheses, e.g. (click)= on a component
 	- works for both native and custom events
	- no more directives per event required (ng-click, and so on)
	- you can pass $event to get the event itself 
 
 - refs:
    - used to make components referencable
    - declare with a '#'-sign, see #log-me
*/

@Component({
	selector: 'not-todo-input'
})
@View({
	template: `
		<input type="text" #log-me />
		<button (click)="onClick($event, logMe)">Log input/button>
	`
})
export class NotTodoInput { 
	onClick(event, value) {
		// note: value here is the referenced component
		// you can then utilize that in any way you wish
		// for example, to get the value of the input itself, use the .value property.
		console.log(event, value);
	}
}