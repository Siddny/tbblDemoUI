import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import  { ServiceService } from '../../services/service.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  clients: any = [];

  constructor(
    public dialog: MatDialog,
    private db:ServiceService,
  	) { }

  ngOnInit() {
    this.getClients();
  }

  getClients(){
  	this.db.getClients().subscribe(data=>{
  		this.clients = data;
  		console.log(data);
  	})
  }

  openClientDialog(): void {
    let dialogRef = this.dialog.open(NewClientDialog, {
      width: '600px',
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getClients();
    });
  }

}


@Component({
  selector: 'new_erp_application',
  templateUrl: 'modals/new_client.html',
})

export class NewClientDialog {

  new_client: Client = new Client();
  app_item: any;

  constructor(
  	private db:ServiceService,
    public dialogRef: MatDialogRef<NewClientDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }
  onNoClick(): void {
    this.dialogRef.close();
  }

  newClient(){
  	this.new_client['phone'] = '+254'+this.new_client['phone'];
  	console.log(this.new_client['phone']);
  	console.log(this.new_client);
  	this.db.newClient(this.new_client).subscribe(data=>{
  		this.new_client = new Client();
  	})
    this.dialogRef.close();
  }
}

export class Client{
	name: any;
	email: any;
	phone: any;
}