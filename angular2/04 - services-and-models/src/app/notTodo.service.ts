export class NotTodoModel {
	status: string = "inprogress";
	
	constructor(public title: string = "") { }
	
	toggle():void {
		if (this.status == "inprogress") this.status = "completed";
		else this.status = "inprogress";
	}
}

export class NotTodoService {
	notTodos: NotTodoModel[] = [];
	
	addNotTodo(value:NotTodoModel):void {
		this.notTodos.push(value);
	}
}