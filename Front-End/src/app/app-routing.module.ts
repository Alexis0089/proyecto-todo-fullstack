import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { NotasComponent } from './component/notas/notas.component';
import { FormNotasComponent } from './component/form-notas/form-notas.component';
import { HomeComponent } from './component/home/home.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch:'full'},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'notas', component: NotasComponent},
  {path: 'form', component: FormNotasComponent},
  {path: 'form/edit/:id', component: FormNotasComponent}
  /* {path: 'formNotas', component: FormNotasComponent} */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
