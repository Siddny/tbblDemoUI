import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import 'rxjs/Rx'

@Injectable()
export class ServiceService {

  apiURL = "http://localhost/lol/";
  serverURL = "http://127.0.0.1:8000/";

  constructor(private http:Http) { }

  saveScript(script:any){
    console.log(script);
    this.http.post(this.apiURL, script)
      .subscribe(
        (val) => {
            console.log("POST call successful value returned in body", val);
        },
        response => {
            console.log("POST call in error", response);
        },
        () => {
            console.log("The POST observable is now completed.");
        });
  }
  //Get all Scripts
  getScripts() {
    const headers = new Headers();
    	headers.append("Cache-Control", "no-cache");
        headers.append('Access-Control-Allow-Origin', '*');
        headers.append('Access-Control-Allow-Methods', 'GET, POST');
        headers.append('Access-Control-Max-Age', '1728000');
    	headers.append('Content-Type', 'application/x-www-form-urlencoded');
      return this.http.get(this.apiURL);
  }

  saveUsers(users: any[]){
  	const headers = new Headers();
    	headers.append("Cache-Control", "no-cache");
        headers.append('Access-Control-Allow-Origin', '*');
        headers.append('Access-Control-Allow-Methods', 'GET, POST');
        headers.append('Access-Control-Max-Age', '1728000');
    	headers.append('Content-Type', 'application/x-www-form-urlencoded');

    console.log(users);
    this.http.post(this.apiURL, users , {headers:headers})
      .subscribe(
        (val) => {
            console.log("POST call successful value returned in body", 
                        val);
        },
        response => {
            console.log("POST call in error", response);
        },
        () => {
            console.log("The POST observable is now completed.");
        });
  }
  //Get all users
  getUsers() {
    const headers = new Headers();
    	headers.append("Cache-Control", "no-cache");
        headers.append('Access-Control-Allow-Origin', '*');
        headers.append('Access-Control-Allow-Methods', 'GET, POST');
        headers.append('Access-Control-Max-Age', '1728000');
    	headers.append('Content-Type', 'application/x-www-form-urlencoded');
      return this.http.get(this.apiURL);
  }
  //Update user
  updateUser(user)
  {
    return this.http.put(this.apiURL, user).subscribe(
        (val) => {
            console.log("UPDATE call successful value returned in body", 
                        val);
        },
        response => {
            console.log("UPDATE call in error", response);
        },
        () => {
            console.log("The UPDATE observable is now completed.");
        });
  }
  //Delete user
  deleteUser(user){
    return this.http.delete(this.apiURL, new RequestOptions({body : user
      })).subscribe(
        (val) => {
            console.log("DELETE call successful value returned in body", 
                        val);
        },
        response => {
            console.log("DELETE call in error", response);
        },
        () => {
            console.log("The DELETE observable is now completed.");
        });
  }

  newErpApp(new_org){
    let url = this.apiURL;
    let headers = new Headers({
      'Content-Type' : 'application/json',
      'Authorization' : localStorage.getItem("erp_token"),
    });
    return this.http.post(url, JSON.stringify(new_org), {headers:headers})
  }

  getErpApp(){
    let url = this.apiURL;
    let headers = new Headers({
      'Content-Type' : 'application/json',
      'Authorization' : localStorage.getItem("erp_token"),
    });
    console.log(headers)
    return this.http.get(url, {headers:headers}).map(res=>res.json())
  }

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
}
