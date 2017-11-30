import {inject} from 'aurelia-framework';
import {ToDos} from '../resources/data/todos';
import { AuthService } from 'aurelia-auth';


@inject(ToDos, AuthService)
export class List {

  constructor(todos,auth){
      this.todos=todos;
      this.auth = auth;
      
      this.user = JSON.parse(sessionStorage.getItem('user'));
      this.title = "Jacob has things ToDo!"
      this. showList = true;
      this.showCompleted=false;
      this.priorities = ['Low', 'Medium', 'High', 'Critical'];
      }
  
  createTodo(){	
		this.todoObj = {
			todo: "",
			description: "",
			dateDue: new Date(),
			 userId: this.user._id,
			priority: this.priorities[0]
		}
		this.showList = false;		
	}


editTodo(todo){
          this.todoObj = todo;
          this. showList = false;
      }
  
async saveTodo(){
  if(this.todoObj){		
    let response = await this.todos.save(this.todoObj);
    if(response.error){
      alert("There was an error creating the ToDo");
    } else {
      //Could provide feeback									
    }
    this.showList = true;
  }
}
async deleteTodo(id){
  let response = await this.data.delete(this.TODOS_SERVICE + "/" + id);
  if(!response.error){
    for(let i = 0; i < this.todosArray.length; i++){
      if(this.todosArray[i]._id === id){
        this.todosArray.splice(i,1);
      }
    }
  }
}
completeTodo(todo){
      todo.completed = !todo.completed;
      this.todoObj = todo;
      this.saveTodo();
  }
  toggleShowCompleted(){
        this.showCompleted = !this.showCompleted;
    }
    
   deleteTodo(todo){
            this.todos.deleteTodo(todo._id);
        }
  logout(){
    sessionStorage.removeItem('user');
     this.auth.logout();
  }   
}
