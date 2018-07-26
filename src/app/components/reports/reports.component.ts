import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../services/service.service';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {

  csvs: any;
  scripts: any=[];

  displayedColumns = [ 'id', 'q1', 'q2', 'q3', 'q4', 'q5', 'q6', 'q7', 'q8', 'q9', 'q10email', 'q11', 'dispose', 'othersystems', 'timetocall', 'escalation', 'email', 'phone'
  ];
  dataSource: any;

  constructor(private db:ServiceService) { }

  ngOnInit() {
  	this.getScripts();
  }

  getScripts(){
    this.db.getAllScripts().subscribe(data=>{
      this.scripts = data;
      this.dataSource = new MatTableDataSource <Element>(this.scripts);
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

}
