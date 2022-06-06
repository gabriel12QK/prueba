import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ActorService {

  constructor(private http:HttpClient) { }
  getActor (nom:string){
    return this.http.get<any>('https://api.themoviedb.org/3/search/person?api_key=ab296cb3ff98750a06e731076f4d23f5&language=en-US&query='+ nom +'&page=1&include_adult=false')
  }
}
