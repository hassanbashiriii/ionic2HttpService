import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import { todosService } from '../../app/services/todos.service';
import { TodosPage } from '../todos/todos';
import { todoDetailsPage } from '../todoDetails/todoDetails';

@Component({
  selector: 'page-update-todo',
  templateUrl: 'updateTodo.html',
  providers: [todosService]
})
export class updateTodoPage {

  private todo;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private _todoService: todosService) {
    this.todo = this.navParams.get('selectedTodo');
  }

  onSubmit(){
    //update
    this._todoService.updateTodo(this.todo,this.todo._id.$oid).subscribe(data => {
      var result = data
    },
    err => console.log(err),
    () => console.log('todo Added'));

    this.navCtrl.setRoot(TodosPage);
  }

  onCacncel(){
    this.navCtrl.setRoot(TodosPage);
  }

}
