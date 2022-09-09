import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HelloService {

  Blog:any[]=[];

  constructor(private httpClient: HttpClient) { }

  getAllTodos() {
    return this.httpClient.get('http://localhost:3000/todo/get_all');
  }

  addUser(data: any){
    return this.httpClient.post('http://localhost:3000/todo/add_task',data);
  }

  deleteUser(id: number){
    return this.httpClient.delete(`http://localhost:3000/todo/delete/${id}`);
  }
  
  getOneUser(id: number){
    return this.httpClient.get(`http://localhost:3000/todo/get/${id}`);
  }

  updateUser(id: number,data: any){
    return this.httpClient.put(`http://localhost:3000/todo/update/${id}`,data);
  }

  comment(blogID:any, comment:any){
    return this.httpClient.put(`http://localhost:3000/comment/add`,
    {
      blogID,
      comment
    });
  }
}
