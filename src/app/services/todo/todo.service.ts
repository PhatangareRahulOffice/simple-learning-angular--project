import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const API_URL = 'http://localhost:3000/todos';
@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor(private http: HttpClient) {}
  //  Create Todo
  createTodo(todo: any,updateBtn:any) {
    if(updateBtn == 'add'){
      return this.http.post(API_URL, todo);
    }else{
    const url = `${API_URL}/${todo.id}`;
      return this.http.put(url, todo);


    }
  }

  //  get All Todos
  getTodos() {
    return this.http.get(API_URL);
    
  }

  //  update todo
  updateTodo(id: number, todo: any) {
    const url = `${API_URL}/${id}`;
    return this.http.put(url, todo);
  }

  //  Delete todo
  deleteTodo(id: number) {
    const url = `${API_URL}/${id}`;
    return this.http.delete(url);
  }
}
