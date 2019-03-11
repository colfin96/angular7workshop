import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'TestServer';
  userName = '';
  isUserNameEmpty = true;

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer(){
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
  }

  onUpdateServerName(event: Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  onUpdateUserName(event: Event){
    let targetVal = (<HTMLInputElement>event.target).value;
    if(targetVal != ''){
      this.userName = targetVal;
      this.isUserNameEmpty = false;
    }
    else{
      this.isUserNameEmpty = true;
    }

  }

  onClickUserNameButton(){
    this.userName = '';
    this.isUserNameEmpty = true;
  }
}
