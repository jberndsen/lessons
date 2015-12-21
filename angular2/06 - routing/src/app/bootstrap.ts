import {provide} from "angular2/core";
import {bootstrap} from "angular2/platform/browser";
import {APP_BASE_HREF, ROUTER_PROVIDERS} from 'angular2/router';

import {App} from "./app.component";
import {NotTodoService} from "./notTodo.service";

// app-global available DI
// also, we set the base href here using the provide function
bootstrap(App, [NotTodoService, ROUTER_PROVIDERS, provide(APP_BASE_HREF, { useValue: '/' })]);