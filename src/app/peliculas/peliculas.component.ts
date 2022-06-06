import { Component, OnInit, Input } from '@angular/core';
import { DetallesService } from '../servicio/detalles.service';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit {

  @Input('pelicula') pel:any
 det:any;
 constructor(private _det:DetallesService) { }

 ngOnInit(): void {
 }
 getdet(id:string){
  this._det.getDet(id).subscribe
  ({   
     next:(s)=>{
       this.det=s;
       console.log(s)
      debugger
     },
     error:(_e)=>{
     debugger
     }
  })
}
}
