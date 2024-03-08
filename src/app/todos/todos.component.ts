import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TodoService } from '../services/todo/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  todoForm: FormGroup;
  todoData:any;
  isUpdateMode = false;

  constructor(public fb: FormBuilder, private todoService: TodoService) {
    this.todoForm = this.fb.group({
      title: [''],
      description: [''],
    });
  }

  ngOnInit(): void {
    this.getAllTodo()
  }
  submitForm() {
    const updateBtn = this.todoForm.value.id == null? 'Add':"Update";
    const todoData = this.todoForm.value;
    console.log(this.todoForm.value,'this.todoForm.value')
    this.todoService.createTodo(todoData,updateBtn).subscribe(
      (response) => {
        console.log('TODO created successfully:', response);
        this.todoForm.reset();
        this.getAllTodo()
      },
      (error) => {
        console.log('Error creating todo', error);
      }
    );
  }

  getAllTodo(){
    this.todoService.getTodos().subscribe(data =>{
      this.todoData = data;
      console.log('data', data)
    })
  }
  deleteTodo(id:number){
    this.todoService.deleteTodo(id).subscribe((response)=>{
      console.log(response, 'Delete')
      this.getAllTodo()
    })
  }


   updateTodo(id:any){
     const todoId  = id;
     let value:any ;
       this.todoData.map((ele:any)=>{
          if(ele.id == todoId){
       value =  ele
}   
      })
      console.log(value, 'val')
      this.todoForm.patchValue(value);
  }

  getTodoById(id:number){
    this.todoService.updateTodo(id, this.todoForm).subscribe((data)=>{

    })
  }
  //   this.todoService.updateTodo(this.todoData).subscribe((data)=>{
  //     console.log("Todo Updated:",data);
  //     this.todoData =data;
  //     console.log(this.todoData, 'daraaa')
  
  //     const updatedIndex = this.todoData.findIndex((item:any)=>item.id === id );
  //     console.log(updatedIndex, 'updatedIndex')
  //     if(updatedIndex !== -1){
  //       this.todoData[updatedIndex] = data;
  //     }
  //     this.todoForm.reset();
  //    },(error)=>{
  //     console.log("Error Update todo",error)
  //    })
  // }
}
