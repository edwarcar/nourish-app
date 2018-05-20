import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  
  databaseUrl: string = 'https://nourish-backend.herokuapp.com/auth'; 

  constructor(private http: HttpClient) { }
  
  
}
