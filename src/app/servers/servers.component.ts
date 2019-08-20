import { Component, OnInit } from '@angular/core';


@Component({
  selector: '[app-servers]',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverName = "TestServer";
  servercreated: boolean  = false;
  serverCreationstatus = "no server was created";
  constructor() {
    setTimeout(()=>{
      this.allowNewServer = true;
    },2000)
   }

   onCreateServer(){
     this.servercreated = true;
     this.serverCreationstatus = "Server was created with Name "+this.serverName;
   }

   onUpdateServerName(event : any){
     this.serverName = (<HTMLInputElement>event.target).value;
   }

  ngOnInit() {
  }

}
