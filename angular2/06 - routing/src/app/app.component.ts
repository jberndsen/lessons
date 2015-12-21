import {Component, View} from "angular2/core";
import {ROUTER_DIRECTIVES, RouteConfig} from 'angular2/router';
import {NotTodo} from "./notTodo.component";
import {About} from "./about.component";

/*
    This lesson code shows how to set up routing:
    - Use the RouteConfig decorator to set up routes
    - Use the [routerLink] directive to navigate to routes
    - Use the <router-outlet> to render out the currently routed component
*/

@Component({
    selector: 'app',
})
@RouteConfig([
    { path: '/', component: NotTodo, as: 'NotTodo' },
    { path: '/About', component: About, as: 'About' }
])
@View({
    directives: [NotTodo, ROUTER_DIRECTIVES],
    template: `
        <div>
            <a [routerLink]="['./NotTodo']" class="nav-title secondary">Not Todo App</a> |
            <a [routerLink]="['./About']" class="nav-title secondary">About</a>
         </div>

        <router-outlet></router-outlet>
    `
})
export class App { }