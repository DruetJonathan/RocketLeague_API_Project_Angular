import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Item} from "../shared/models/Item";

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  url : string = "http://localhost:8080/items"
  constructor(private _httpClient : HttpClient) { }

  getAllItems():Observable<Item[]>{
    return this._httpClient.get<Item[]>(this.url)
  }
  getItemById(id:string):Observable<Item>{
    return this._httpClient.get<Item>(this.url+"/"+id)
  }
}
