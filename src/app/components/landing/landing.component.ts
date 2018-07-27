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

  new_calls : any;
  new_calls_list : any;
  call_backs : any;
  call_backs_list : any;

  constructor(
    public dialog: MatDialog,
    private db:ServiceService,
  	) { }

  ngOnInit() {
    this.getClients();
  }

  getClients(){
	this.new_calls_list = [];
	this.call_backs_list = [];
  	this.db.getClients().subscribe(data=>{
  		this.clients = data;
  		console.log(data);

		let res = data.filter(item=>{
			if (item['status'] == "NotCalled") {
				this.new_calls = item;
				this.new_calls_list.push(this.new_calls)
				console.log(item);
				return item
			}else if (item['status'] == "CallBack") {
				this.call_backs = item;
				this.call_backs_list.push(this.call_backs)
				console.log(this.call_backs);
				return item
			}
		})
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