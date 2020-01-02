import { Component, OnInit, AfterViewInit } from '@angular/core';

import Swiper from 'swiper';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

  // se crea un atributo tipo Swiper y se inicializa apuntando al contendor
  mySwiper: Swiper;
  ngAfterViewInit(): void {
    this.mySwiper = new Swiper('.swiper-container');
  }

  constructor() { }

  ngOnInit() {
  }

}
