import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import 'rxjs/Rx'

@Injectable()
export class ServiceService {

  serverURL = "https://tbbldemo.herokuapp.com/";
  // serverURL = "http://127.0.0.1:8000/";

  constructor(private http:Http) { }

  newScript(new_script){
    let url = this.serverURL+'scripts/';
    let headers = new Headers({
      'Content-Type' : 'application/json',
    });
    return this.http.post(url, JSON.stringify(new_script), {headers:headers})
  }

  getAllScripts(){
    let url = this.serverURL+'scripts/';
    let headers = new Headers({
      'Content-Type' : 'application/json',
    });
	return this.http.get(url, {headers:headers}).map(res=>res.json())
  }

  getReports(){
  	let url = this.serverURL+'csvs/';
    let headers = new Headers({
      'Content-Type' : 'application/json',
    });
	  return this.http.get(url, {headers:headers})
  }

  getClients(){
    let url = this.serverURL+'clients/';
    let headers = new Headers({
      'Content-Type' : 'application/json',
    });
    return this.http.get(url, {headers:headers}).map(res=>res.json())
  }

  newClient(client){
    let url = this.serverURL+'clients/';
    let headers = new Headers({
      'Content-Type' : 'application/json',
    });
    return this.http.post(url, JSON.stringify(client), {headers:headers}) 
  }

  getClientDetails(id){
    let url = this.serverURL+'client/'+id+'/';
    let headers = new Headers({
      'Content-Type' : 'application/json',
    });
    return this.http.get(url, {headers:headers}).map(response =>{
      let data = response.json().filter(item =>{
        if(item.id == id){
          return item
        }
      });
      return data;
    });
  }
}
