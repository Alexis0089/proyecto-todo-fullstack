import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular_prueba';

  apiUrl = 'http://127.0.0.1:8000/api/task-list/';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    
  }


}




/* this.http.get<any>(this.apiUrl).subscribe(
  (response) => {
    // Aquí puedes manejar la respuesta de la API
    console.log(response);
  },
  (error) => {
    // Aquí puedes manejar los errores de la solicitud
    console.error(error);
  }
);  */