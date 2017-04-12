import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { todosService } from '../../app/services/todos.service';
import { todoDetailsPage } from '../todoDetails/todoDetails';


@Component({
  selector: 'page-todos',
  templateUrl: 'todos.html',
  providers:[todosService],
})
export class TodosPage {

  todos;

  constructor(public navCtrl: NavController,public _todosService: todosService, navParams: NavParams) {

  }

  ngOnInit(){
    this._todosService.getTodos().subscribe(_todos => {
      this.todos = _todos;
        });
  }

  ionViewDidEnter() {
    this._todosService.getTodos().subscribe(_todos => {
      this.todos = _todos;
        });
  }

  todoOnClick(event, clickedTodo){
    this.navCtrl.push(todoDetailsPage, {
      clickedTodo
    });
  }
}
