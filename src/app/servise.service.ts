import { HttpClient } from '@angular/common/http';
import { Injectable, } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiseService {
  url:any= "http://localhost:3000/products"
  

 
  constructor(private http:HttpClient) {
    
   }
   getData(){
  return this.http.get(this.url)
    
   }
  
}