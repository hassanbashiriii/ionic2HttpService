import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import { todosService } from '../../app/services/todos.service';
import { TodosPage } from '../todos/todos';
import { updateTodoPage } from '../updateTodo/updateTodo';


@Component({
  selector: 'page-todo-details',
  templateUrl: 'todoDetails.html',
  providers: [todosService]
})
export class todoDetailsPage {

    private todo;
  constructor(public navCtrl: NavController, public navParams: NavParams, public _todoService: todosService) {
        this.todo = this.navParams.get('clickedTodo');
  }
  
  deleteTodo(todoId){
    //delete todo
    this._todoService.deleteTodos(todoId).subscribe(data => {
      var result = data
    },
    err => console.log(err),
    () => console.log('todo deleted'));

    this.navCtrl.setRoot(TodosPage);
  }

  updateOnClick(selectedTodo){
    this.navCtrl.push(updateTodoPage, {
      selectedTodo
    })
  }

}
