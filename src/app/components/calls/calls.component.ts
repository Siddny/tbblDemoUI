import { Component, OnInit, VERSION, ViewChild, ElementRef } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';
import { MatStepper } from '@angular/material';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import  { ServiceService } from '../../services/service.service';

@Component({
  selector: 'app-calls',
  templateUrl: './calls.component.html',
  styleUrls: ['./calls.component.css']
})
export class CallsComponent implements OnInit {

  @ViewChild('stepper') stepper: MatStepper;

  showName: boolean= false
  question: boolean= false
  othertime: boolean= false
  gettime: boolean= false
  poor: boolean= false
  escalation: boolean = false;

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

  id: any;
  client_details: any;

  client_call: ClientCall = new ClientCall();
  constructor(
  	private db:ServiceService,
  	private route: ActivatedRoute,
  	) { }

  ngOnInit() {
  	this.getClientDetails();
  }

  getClientDetails(){
    this.route.params.subscribe(params=>{
      this.id = params['id'];
      this.db.getClientDetails(this.id).subscribe(data=>{
      	for(let i of data){
          this.client_details = i;
    	  console.log(i);
        }
      })
    })
  }

  postScript(){
    console.log(this.new_script);
    console.log(this.client_call);
    console.log(this.new_script['escalation']);
    if (this.new_script['escalation'] == 'YES') {
    	this.new_script['email'] = this.client_details.email;
    	this.new_script['phone'] = this.client_details.phone;
    }
    this.client_call['client'] = this.client_details.id;
    this.client_call['script'] = this.new_script;
    this.db.newScript(this.client_call).subscribe(data=>{
      this.client_call = new ClientCall();
    })
    this.showName = false;
    this.question = false;
    this.othertime = false;
    this.gettime = false;
    this.poor = false;
    this.escalation = false;
  }
  
  disposeCall(){
  	console.log(this.client_details);
  	this.db.disposeCall(this.client_details).subscribe(data=>{

  	})
  }

  move(index: number) {
    this.stepper.selectedIndex = index;
  }

  otherOptions(){
    this.showName = !this.showName;
  }

  haveQuestion(){
    this.question = !this.question;
  }

  notNow(){
    this.othertime = !this.othertime;
  }

  getTime(){
    this.gettime = !this.gettime;
  }

  Poor(){
    this.poor = !this.poor;
  }

  Escalation(){
  	this.escalation = !this.escalation;
  }
}

export class ClientCall{
	script: Script;
	client: any;
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
  q11email: any;
  dispose: any;
  q12: any;
  // q14: any;
  othersystems:any;
  timetocall:any;
  escalation: any;
  email: any;
  phone: any;
}
