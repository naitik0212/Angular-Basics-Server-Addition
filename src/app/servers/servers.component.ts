import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  serverCreationStatus = 'No Server is currently created!'
  allowNewServer = false;
  serverName = '';
  serverCreated = false;
  servers = ['testServer', 'testServer2'];

  constructor() {
    setTimeout(() => {this.allowNewServer = true; }, 2000);
  }
  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created. The name of server is ' + this.serverName ;
  }

  onUpdateServerName(event: any) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
