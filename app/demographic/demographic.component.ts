import { Component,OnInit } from '@angular/core';

@Component ({
    selector: 'demographic'
    ,templateUrl: './demographic.component.html'
})

export class DemographicComponent implements OnInit
 {
    title= "Demographic Details";
    body:String;
    ngOnInit() 
   {
     this.body = "Demographic Content"  
    console.log("hello log");
   }

    constructor() {
    }
 }