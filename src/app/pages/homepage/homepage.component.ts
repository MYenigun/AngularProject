import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { TodoResponse } from '../../models/responses/todo-response';
import { BootCampResponse } from '../../models/responses/bootcamp-model-response';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [RouterModule,CommonModule,HttpClientModule],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {
  todoList:TodoResponse[]=[];
  bootCamp:BootCampResponse[]=[];

  constructor(private httpClient:HttpClient){}

  ngOnInit(): void {
    this.getListBootcamps();
  }

  getListBootcamps(){
    this.httpClient.get<BootCampResponse[]>("http://localhost:4200/api/Models")
    .subscribe({
      next:(response:BootCampResponse[])=>{
        console.log("Cevap geldi :",response);
        this.bootCamp=response;
      },
      error:(error)=>{console.log("cevap hatalı :",error)},
      complete:()=>{console.log("istek sonlandı")}
    })
  }
  getListTodos(){
    this.httpClient.get<TodoResponse[]>("https://jsonplaceholder.typicode.com/todos")
    .subscribe({
      next:(response:TodoResponse[])=>{
        console.log("Cevap geldi :",response);
        this.todoList=response;
      },
      error:(error)=>{console.log("cevap hatalı :",error)},
      complete:()=>{console.log("istek sonlandı")}
    })
  }

  getTodos1(){

    console.log("Öncesi")
    this.asyncOperation()
    .then((response:string)=>{
      console.log("Doğru çalıştı : ",response)
    })
    .catch((error)=>{
      console.log("Hata :",error)
    })
    .finally(()=>{
      console.log("Başarılı veya başarısız");
    })
    console.log("sonrası")
  }

  async getTodos2(){
    try {
      let values = await this.asyncOperation();
      console.log(values);
    } catch (error) {
      console.log("hata :",error)
    }
  }

  asyncOperation():Promise<string>{
    //callback function
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        reject("çalıştı");
      })
    });
  }

}
