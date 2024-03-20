import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrl: './todolist.component.css'
})
export class TodolistComponent {
  tasks = [
    {index: 1, name: 'Fazer um cafezinho', isCompleted: false },
    {index: 2, name: 'Escolher uma música', isCompleted: false },
    {index: 3, name: 'Estudar AngularJS', isCompleted: false },
    {index: 4, name: 'Iniciar o desenvolvimento do projeto', isCompleted: false }
  ]

  constructor (){}

  ngOnInit(): void{

  }

  onSubmit(form: NgForm){
    let names : any= [];

    for(let task of this.tasks){
      names.push(task.name)  
    }
    if(!(names.includes(form.controls['task'].value))){
      this.tasks.push({
        index: this.tasks.length+1,
        name: form.controls['task'].value,
        isCompleted: false
      })
    } else {
      alert("The task already exists!")
    }
    form.reset();
  }
  
  onCheck(index:number){
    this.tasks[index].isCompleted = !this.tasks[index].isCompleted;

  }

  onDelete(index: number){
    this.tasks.splice(index,1)
  }
}
