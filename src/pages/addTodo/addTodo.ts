import { Component } from '@angular/core';

import { NavController, Tabs } from 'ionic-angular';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { todosService } from '../../app/services/todos.service';
import { TodosPage } from '../todos/todos';

@Component({
  selector: 'page-add-todo',
  templateUrl: 'addTodo.html',
  providers: [todosService, LocalNotifications]
})
export class AddTodoPage {

  private todo = {
      title: '',
      note: '',
      type: ''
    }
  
  constructor(public navCtrl: NavController,private _todoService: todosService,public _tab: Tabs, private _localNotifications: LocalNotifications) {

  }

  onSubmit(){

    //Add todo
    this._todoService.addTodos(this.todo).subscribe(data => {
      var result = data
    },
    err => console.log(err),
    () => console.log('todo Added'));

    this._tab.select(0);
    this.navCtrl.setRoot(AddTodoPage);

    this._localNotifications.schedule({
      id: 1,
      text: 'todo added',
      sound: null
    });
    
  }

}
