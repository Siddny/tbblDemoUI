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

  constructor(private db:ServiceService, private http: Http)
  {  } 

  //Init method
  ngOnInit(){
    // this.getScripts();
  }

}
