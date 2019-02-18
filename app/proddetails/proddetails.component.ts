import { Component,OnInit } from '@angular/core';
import { EclipseService }  from '../service/eclipse.service';

@Component ({
    selector: 'productdetails',
    templateUrl: './proddetails.component.html',
     providers: [EclipseService]
})

export class ProductDetailsComponent implements OnInit
 {
    topics=[];    
    title= "ProductDetails Details";
    body:String;
    ngOnInit() 
   {
     this.body = "ProductDetails Content"  
    console.log("ProductDetails log");
   }

    constructor(private _httpService: EclipseService ) {
        this.postTopic();
    }

    postTopic()
   {
     //this._httpService.postTopic().subscribe(data => this.topics = data,
                                            //      error => alert(error),
                                   //()=> console.log("Finished"));
   }
 }