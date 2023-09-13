import { Component, OnInit } from '@angular/core';
import { TareasI } from 'src/app/modelo/tareas';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-notas',
  templateUrl: './notas.component.html',
  styleUrls: ['./notas.component.css']
})
export class NotasComponent implements OnInit {

  tareas: any = [];
  

  constructor(private api_service: ApiService){

  }

  ngOnInit(){
    this.obtenerTareas();
  }

  obtenerTareas(){


    this.api_service.getList().subscribe(
      (res) =>{

        //Lleno mi arreglo de tareas con la respuesta
        this.tareas = res;
      console.log(res);
      console.log('LISTA DE TAREAS recibida desde el backend !');
    },
    (error) => {
       // Aquí puedes manejar los errores de la solicitud
    console.error(error);
    }
    
    )


  }

  borrarTarea(id: string){
    console.log(id)
    this.api_service.deleteTask(id).subscribe(
      (res) => {
        console.log(res) // Función para manejar los valores emitidos
        this.obtenerTareas(); //Vuelvo a cargar la lista de tareas actualizada
      },
      (error) => console.error(error), // Función para manejar errores
      () => console.log('Completado') // Función para manejar la finalización del Observable
    );


  }

  editarTarea(id:string){
    console.log(id);
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