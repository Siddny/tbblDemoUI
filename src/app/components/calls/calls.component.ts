import { Component, OnInit, VERSION, ViewChild, ElementRef } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';
import { MatStepper } from '@angular/material';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
// import { AmazingTimePickerService } from 'amazing-time-picker'; 

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

  disposeQ2:boolean = false;
  disposeQ3:boolean = false;
  gettimeQ3:boolean = false;
  disposeQ5:boolean = false;
  disposeQ10:boolean = false;
  gettimeQ10:boolean = false;

  visitDay: boolean = false;
  q3proceed: boolean = false;
  not_intQ3: boolean = false;
  not_intQ10: boolean = false;
  not_intQ5: boolean = false;

  available: boolean = false;
  check_available: boolean = true;
  not_available: boolean = false;

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
  client_email: any;

  mytime: any;
  
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
          this.client_email= this.client_details.email;
    	  console.log(i);
        }
      })
    })
  }

  confirmAvailable(){
  	this.check_available = !this.check_available;
  	this.available = !this.available;
  }

  notAvailable(){
  	if (this.not_available ==false ) {
  		this.not_available = true;
  	}
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
    this.client_call['script']['client_name'] = this.client_details.name;
    this.client_call['script']['q11email'] = this.client_email;
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
  
  callBackLater(){
  	console.log(this.client_details);
  	this.db.callBackLater(this.client_details).subscribe(data=>{ })
  }

  completeCall(){
  	console.log(this.client_details);
  	this.db.completeCall(this.client_details).subscribe(data=>{ })
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

  Poor(){
    // this.poor = !this.poor;
  	if (this.poor == false) {
  		this.poor = true;
  	}
  	if (this.poor == true) {
  		this.poor = true;
  	}
  }

  Escalation(){
  	this.escalation = !this.escalation;
  }

  getTime(){
    this.gettime = !this.gettime;
    this.disposeQ2 = false;
    console.log('gettime'+this.gettime);
    console.log('disposeQ2'+this.disposeQ2);
  }
  DisposeQ2(){
  	this.disposeQ2 = !this.disposeQ2;
  	this.gettime = false;
    console.log('gettime'+this.gettime);
    console.log('disposeQ2'+this.disposeQ2);
  }

  getTimeQ3(){
  	this.not_intQ3 = false;
  	if (this.gettimeQ3 == false) {
  		this.gettimeQ3 = true;
  	}
  	if (this.gettimeQ3 == true) {
  		this.gettimeQ3 = true;
  	}
  }
  notIntQ3(){
  	if (this.gettimeQ3 == true) {
  		this.gettimeQ3 = false;
  	}
  	this.not_intQ3 = true;
  }
  DisposeQ3(){
  	this.disposeQ3 = !this.disposeQ3;
  	this.gettimeQ3 = false;
    console.log('gettimeQ3'+this.gettimeQ3);
    console.log('disposeQ3'+this.disposeQ3);
  }

  DisposeQ5(){
  	this.disposeQ5 = !this.disposeQ5;
  }
  notIntQ5(){
  	this.not_intQ5 = true;
  }

  VisitDay(){
  	this.disposeQ10 = false
  	if (this.visitDay == false) {
  		this.visitDay = true;
  	}
  	if (this.visitDay == true) {
  		this.visitDay = true;
  	}
  }
  getTimeQ10(){
  	this.not_intQ10 = false;
  	if (this.gettimeQ10 == false) {
  		this.gettimeQ10 = true;
  	}
  	if (this.gettimeQ10 == true) {
  		this.gettimeQ10 = true;
  	}
  }
  notIntQ10(){
  	if (this.gettimeQ10 == true) {
  		this.gettimeQ10 = false;
  	}
  	this.not_intQ10 = true;
  }
  DisposeQ10(){
  	this.visitDay = false;
  	if (this.disposeQ10 == false) {
  		this.disposeQ10 = true;
  	}
  	if (this.disposeQ10 == true) {
  		this.disposeQ10 = true;
  	}
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
  datetocall:any;
  timetocall:any;
  escalation: any;
  email: any;
  phone: any;
  visitdate: any;
  visittime: any;
  client_name:any;
}
