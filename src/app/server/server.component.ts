import { Component } from '@angular/core';
import { StylesCompileDependency } from '@angular/compiler';

@Component({
    selector:'app-server',
    templateUrl: './server.component.html',
    styles: [`h3{
        color: pink;
    }`]
})
export class ServerComponent{
    serverId: number =10;
    serverStatus: String ='offline';

    getServerStatus()
    {
        return this.serverStatus;
    }

    

}