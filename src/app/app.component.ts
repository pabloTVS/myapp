import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Mi primera aplicación: ';
  name = 'Pablo';

  cosas = ['Pelota','Bici','Camping'];
  nombreCosa;

  changeTitle () {
    this.title = 'Aplicación de ';
  }

  addUnaCosa () {
    this.cosas.push(this.nombreCosa);
    this.nombreCosa ='';
    console.log('Prueba');
  }
}
