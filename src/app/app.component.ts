import { Component } from '@angular/core';
import { PeliulaService } from './servicio/peliula.service';
import { ActorService } from './servicio/actor.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'prueba';
  pel:any;
  act:any
  constructor(private _pelicula: PeliulaService, private _act:ActorService){}
  getMovies(name:any){
    this._pelicula.getMovies(name.value).subscribe
    ({   
       next:(s)=>{
         this.pel=s.results;
       debugger
       console.log(s);
       },
       error:(e)=>{
       debugger
       }
    })
}
getActor(name1:any){
  this._act.getActor(name1.value).subscribe
  ({   
     next:(s)=>{
       this.act=s.results;
       debugger
     },
     error:(e)=>{
     debugger
     }
  })
}
}
