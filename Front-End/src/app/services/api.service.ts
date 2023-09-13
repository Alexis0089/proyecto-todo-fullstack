import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'

import { LoginI } from '../modelo/login';
import { ResponseI } from '../modelo/response';
import { TareasI } from '../modelo/tareas';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  
  
  url:string = 'http://127.0.0.1:8000/api/';

  constructor(private http: HttpClient) { }

  //Método Login
  OnLogin(form:LoginI): Observable<ResponseI>{
    let direccion = this.url + "user/";
    return this.http.post<ResponseI>(direccion, form);

  }


  //Metodos de prueba
  getList(){
    return this.http.get(this.url + "task-list/")
  }

  getOne(id:string){
    return this.http.get(this.url + "task-detail/"+ id)
  }

  saveTask(tarea: TareasI){
    return this.http.post(this.url + "task-create/", tarea)
  }

  deleteTask(id: string){
    /* return this.http.delete(this.url + "task-delete/" + id) */
    return this.http.get(this.url + "task-delete/" + id)
  }

 
  updateTask(id: string | number, updateTask: TareasI): Observable<TareasI>{
    return this.http.post<TareasI>(this.url + "task-update/"+ id,updateTask)
    // return this.http.put<TareasI>(this.url + "task-update/",updateTask) 
  } 


}
