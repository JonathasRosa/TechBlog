import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  @Input()
  photoCover: string = "../../../assets/img/angular-2.png"
  @Input()
  cardTitle: string = "Um overview sobre o framework Angular"
  @Input()
  cardDescription: string = "Quando decidimos utilizar uma tecnologia em um novo projeto, é natural que uma das primeiras coisa que façamos seja entender o propósito que essa tecnologia tem a oferecer e como podemos ter um maior aproveitamento de suas funcionalidades e características. Para adquirir este entendimento é necessário ter uma visão geral da arquitetura dessa tecnologia. Pensando nisso, vamos demonstrar neste artigo uma visão geral da arquitetura do Angular e, assim, possibilitar aos leitores a oportunidade de entender melhor como funciona este fantástico framework."
  constructor() { }
  ngOnInit(): void { }
}
