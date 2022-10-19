import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  constructor() {}

  ngOnInit(): void {

    // debugger es una instruccion que detiene el cargado de la pagina en ese punto.
    // debugger;

    let num = 10;

    num = 20;
    num = num + 2;

     console.log(num);
  }

}
