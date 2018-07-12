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

  constructor(private db:ServiceService, private http: Http){
    //DB service function called
    //   db.getUsers().subscribe(
    //     (response: Response) => { 
    //       // this.persons = response.json();
    //       // console.log(this.persons);
    //       // this.reloadItems(this.params);
    //     } ,
    //     (error) => {console.log(error);}
    // );;
  } 

  //Init method
  ngOnInit(){
    this.userForm = new FormGroup({
      'id': new FormControl(null),
      'first_name': new FormControl(null, Validators.required),
      'last_name': new FormControl(null, Validators.required)
    });
    this.getScripts();
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
      this.ngOnInit();
    })
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

  // reloadItems(params) {
  //   // this.itemResource = new DataTableResource(this.persons);
  //   this.itemResource.count().then(count => this.itemCount = count);
  //     this.itemResource.query(params).then(items => this.items = items);
  // }
  // special properties:
  rowClick(rowEvent) {
    console.log('Clicked: ' + rowEvent.row.item.id);
  }
  rowDoubleClick(rowEvent) {
    alert('Double clicked: ' + rowEvent.row.item.id);
  }

  rowTooltip(item) { return item.jobTitle; }
  initUser(){
    //User form reset
    this.userForm.reset();
    this.formFlag = 'add';
  }
  initScript(){
    //User form reset
    this.userForm.reset();
    this.formFlag = 'add';
  }
  saveUser(){
      this.userForm.value.id= this.persons.length + 1;
      this.persons.unshift(this.userForm.value);
      //Save method
      this.db.saveUsers(this.userForm.value);
     
      //Update database
    //   this.db.updateUser(this.userForm.value);
    //   var index = this.persons.findIndex(x => x.id== this.userForm.value.id);
    //   if (index !== -1) {
    //     this.persons[index] = this.userForm.value;
  
    // }
    // this.reloadItems(this.params);
    //Close modal
    // this.modalClose.nativeElement.click();
    //User form reset
    this.userForm.reset();
  }

  //Get data while edit
  getData(item)
  {
    //Here you can fetch data from database
    this.userForm.patchValue(item);
    this.formFlag = 'edit';
  }

  delData(item){
    //Call service
    this.db.deleteUser(item);
          //Delete from array
    this.persons.splice(this.persons.indexOf(item), 1);
    // this.reloadItems(this.params);
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
  q12: any;
  q13: any;
  // q14: any;
  othersystems:any;
  timetocall:any;
  emailaddress:any;
}
