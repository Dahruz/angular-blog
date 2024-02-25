import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnInit {
  @Input()
  photoCover:string="https://vidafullstack.com.br/wp-content/uploads/2021/07/versao-12-angular-1080x675.png"
  @Input()
  cardTitle:string="Nova Versão"
  @Input()
  cardDescription:string="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  @Input()
  Id:string="0"
  constructor() { }

  ngOnInit(): void {
  }

}
