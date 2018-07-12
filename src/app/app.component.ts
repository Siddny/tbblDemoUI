import { Component, OnInit, VERSION, ViewChild, ElementRef } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material';
import {MatStepper} from '@angular/material';
import { FormGroup, FormControl, Validators} from '@angular/forms';

import  { ServiceService } from './services/service.service';
import {  Http, Response, Headers } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  
  title = 'app';
  @ViewChild('stepper') stepper: MatStepper;

  showName: boolean= false
  question: boolean= false
  othertime: boolean= false
  gettime: boolean= false
  poor: boolean= false

  userForm: FormGroup;
  scriptForm: FormGroup;
  new_script: Script = new Script();

  @ViewChild('modalClose') modalClose:ElementRef;
  persons: any[] = [];
  itemResource;
  items = [];
  itemCount = 0;
  params = {offset: 0, limit: 10}; //Static can be changed as per your need
  formFlag = 'add';

  csvs: any;
  scripts: any=[];

  constructor(private db:ServiceService, private http: Http)
  {  } 

  //Init method
  ngOnInit(){
    // this.getScripts();
  }

  getScripts(){
    this.db.getAllScripts().subscribe(data=>{
      this.scripts = data;
      console.log(data);
    })
  }

  getCsvs(){
    this.db.getReports().subscribe(data=>{
      console.log(data);
      console.log(data.url);
      this.csvs = data.url;
      window.open(data.url, "_blank")
    })
  }

  postScript(){
    console.log(this.new_script);
    console.log(this.new_script.q1);
    this.db.newScript(this.new_script).subscribe(data=>{
      this.new_script = new Script();
    })
    this.showName = false;
    this.question = false;
    this.othertime = false;
    this.gettime = false;
    this.poor = false;
  }
  
  move(index: number) {
    this.stepper.selectedIndex = index;
  }

  otherOptions(){
    this.showName = !this.showName
  }

  haveQuestion(){
    this.question = !this.question
  }

  notNow(){
    this.othertime = !this.othertime
  }

  getTime(){
    this.gettime = !this.gettime
  }

  Poor(){
    this.poor = !this.poor
  }
}

export class Script{
  q1: any;
  q2: any;
  q3: any;
  q4: any;
  q5: any;
  q6: any;
  q7: any;
  q8: any;
  q9: any;
  q10: any;
  q11: any;
  dispose: any;
  // q13: any;
  // q14: any;
  othersystems:any;
  timetocall:any;
}
