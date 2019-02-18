import { Component,OnInit } from '@angular/core';

@Component ({
    selector: 'additionalinfo',
    templateUrl: './additionalinfo.component.html',
    styleUrls: ['./additionalinfo.component.css']
})

export class AdditionalInfoComponent implements OnInit
 {
    title= "AdditionalInfo Details";
    body:String;
    public showPersonDetails = true;
    public hidePersonDetails = false;
    public fname;
    public personOk = false;
    ngOnInit() 
   {
     this.body = "AdditionalInfo Content"  
    console.log("AdditionalInfo log");
   }

    constructor() {
    }

    togglePersonDetails()
    {
        this.showPersonDetails = !this.showPersonDetails;
        this.hidePersonDetails = !this.hidePersonDetails;
    }

    validatePerson(value)
    {
        console.log(value);
    }
 }