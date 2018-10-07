import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { country } from '../model/country.model';
import { Observable } from 'rxjs';
import { posts } from '../model/posts.model';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  API_ENDPOINT : string = "http://localhost:3000";

  constructor(private _httpClient : HttpClient){}

  getCountryData() : Observable<country[]>{

    return this._httpClient.get<country[]>(`${this.API_ENDPOINT}/countries`);

  }

} 
