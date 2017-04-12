import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()

export class todosService{
    
    apiKey : string;
    todosUrl : string;

    constructor(public http: Http) {
        this.apiKey = 'PC_ZmCZLlWFRLjVXZV5el7rXzoKaHKX-';
        this.todosUrl = 'https://api.mlab.com/api/1/databases/todo_test/collections/todos';
    }

    //read
    getTodos(){
        return this.http.get(this.todosUrl+'?apiKey='+this.apiKey)
        .map(res => res.json());
    }

    //create
    addTodos(todo){
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        let url = this.todosUrl+'?apiKey='+this.apiKey;

        return this.http
        .post(url, JSON.stringify(todo), {headers :headers})
        .map(res => res.json());
    }

     // update 
     updateTodo(todo,todoId){
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        let url = this.todosUrl+'/'+todoId+'?apiKey='+this.apiKey;

        return this.http
        .put(url, JSON.stringify(todo), {headers: headers} )
        .map(res => res.json());
    }


     //delete       
     deleteTodos(todoid){
        return this.http.delete(this.todosUrl+'/'+todoid+'?apiKey='+this.apiKey)
        .map(res => res.json());
    }
}