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
    // console.log(form,this.tasks.length+1);
    this.tasks.push({
      index: this.tasks.length+1,
      name: form.controls['task'].value,
      isCompleted: false
    })
    form.reset();
  }
  
  onCheck(index:number){
    console.log(this.tasks)
    this.tasks[index].isCompleted = !this.tasks[index].isCompleted;
  }

  onDelete(index: number){
    console.log(index)
    this.tasks.splice(index,1)
  }
}
