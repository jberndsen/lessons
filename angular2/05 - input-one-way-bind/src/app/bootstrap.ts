import {bootstrap} from "angular2/platform/browser";
import {App} from "./app.component";
import {NotTodoService} from "./notTodo.service";

bootstrap(App, [NotTodoService]);