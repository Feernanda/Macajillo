import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-amigos',
  templateUrl: './amigos.component.html',
  styleUrls: ['./amigos.component.css']
})
export class AmigosComponent{
  imagenes:Array<any> = [
    {imgUrl:"../../../assets/img/galeria1.JPG"},
    {imgUrl:"../../../assets/img/galeria2.JPG"},
    {imgUrl:"../../../assets/img/galeria3.jpg"},
    {imgUrl:"../../../assets/img/galeria4.jpg"},
    {imgUrl:"../../../assets/img/galeria5.jpg"},
    {imgUrl:"../../../assets/img/galeria6.jpg"},
  ]
}
