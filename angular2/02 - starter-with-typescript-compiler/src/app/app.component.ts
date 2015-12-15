import {Component} from "angular2/core";

/*
This file shows how to create your very first component:
 - import Component from angular
 - declare the selector property, this will match up with the usage in html or a different template
 - export class with the component name
*/

@Component({
    selector:'app',
    template: `
        <div>My second Angular 2 App</div>
    `
})
export class App{}