import { Component, OnInit } from '@angular/core';

import { TareasI } from 'src/app/modelo/tareas';
import { ApiService } from 'src/app/services/api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form-notas',
  templateUrl: './form-notas.component.html',
  styleUrls: ['./form-notas.component.css']
})
export class FormNotasComponent implements OnInit {

   tareas: any = [];
  /* arrTareas: any = []; */
    arrTareas: any = {
    title: '',
    description: ''
  };

  edit: boolean = false;


  constructor(
    private api_service: ApiService, 
    private router: Router, 
    private activeRoute: ActivatedRoute){

  }

  ngOnInit(){
   const params = this.activeRoute.snapshot.params;
   //console.log(params);

   if(params['id']){
    this.api_service.getOne(params['id']).subscribe(
      (res) => {
        console.log(res) 
        // Llenamos el arreglo arrTareas con la respuesta que además se imprime por pantalla
        this .arrTareas = res;
        this.edit = true;
      },
      (error) => console.error(error), // Función para manejar errores
      () => console.log('Completado metodo getOne!') // Función para manejar la finalización del Observable
    );



   }



    
  }

  saveTarea(){
    console.log('SaveTarea aqui')
    console.log(this.arrTareas)
    // Suscribirse al Observable
    this.api_service.saveTask(this.arrTareas).subscribe(
  (res) => { 
    console.log(res+"Respuesta del metodo aaveTarea")// Función para manejar los valores emitidos
    this.router.navigate(['/notas']); 

  }, 
  (error) => console.error(error), // Función para manejar errores
  () => console.log('Completado') // Función para manejar la finalización del Observable
);
}


updateGame(){
  console.log('Imprimiendo Obj')
  console.log(this.arrTareas)
  this.api_service.updateTask(this.arrTareas.id, this.arrTareas).subscribe(
    (res) => {
      console.log(res);
      this.router.navigate(['/notas']); 
    },
    (error) => console.error(error), // Función para manejar errores
    () => console.log('Completado el método Actualizar!') // Función para manejar la finalización del Observable
  );



}
  


}


/* // Suscribirse al Observable
miObservable.subscribe(
  (valor) => console.log(valor), // Función para manejar los valores emitidos
  (error) => console.error(error), // Función para manejar errores
  () => console.log('Completado') // Función para manejar la finalización del Observable
); */


/* obtenerTareas(){


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


} */