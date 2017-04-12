import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { AddTodoPage } from '../pages/addTodo/addTodo';
import { HomePage } from '../pages/home/home';
import { TodosPage } from '../pages/todos/todos';
import { TabsPage } from '../pages/tabs/tabs';
import { todoDetailsPage } from '../pages/todoDetails/todoDetails';
import { updateTodoPage } from '../pages/updateTodo/updateTodo';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    AddTodoPage,
    HomePage,
    TodosPage,
    TabsPage,
    todoDetailsPage,
    updateTodoPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    AddTodoPage,
    HomePage,
    TodosPage,
    TabsPage,
    todoDetailsPage,
    updateTodoPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
