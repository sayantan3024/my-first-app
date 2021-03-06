import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

	allowNewServer = false;
	serverCreationStatus = 'No server created';
	serverName = '';
	twoWayBindingName = '';

  constructor() { 
  	setTimeout(() => {
  		this.allowNewServer = true;
  	}, 2000);
  }

  ngOnInit() {
  }

  onCreateServer(){
		this.serverCreationStatus = 'Server '+this.serverName+' is created';
  }

  onUpdateServerName(event: Event){
  	console.log(event);
  	this.serverName = (<HTMLInputElement>event.target).value;
  	//this.serverName = event.target.value;
  }

}
