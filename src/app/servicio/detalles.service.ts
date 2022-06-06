import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DetallesService {

  constructor(private http:HttpClient) { }

  getDet (id:string){
    return this.http.get<any>('https://api.themoviedb.org/3/movie/'+ id +'?api_key=ab296cb3ff98750a06e731076f4d23f5&language=en-US')
  }
}
