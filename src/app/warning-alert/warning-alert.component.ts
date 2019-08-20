import { Component } from '@angular/core';

@Component({
    selector: 'app-warning-alert',
    template: `
    <p> Alert danger detected </p>
    `,
    styles: [`
    p{
        padding: 30px;
        background-color: red;
        border: 1px solid black;

    }
    `]
})
export class WarningAlertcomponent{

}