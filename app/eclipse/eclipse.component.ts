import { Component,OnInit } from '@angular/core';
import { EclipseService }  from '../service/eclipse.service';


@Component ({
    selector: 'eclipse',
    templateUrl: './eclipse.component.html',
    providers: [EclipseService]
})

export class EclipseComponent implements OnInit
 {
    topics=[];
    getData: string;
    postData :string;
    title= "Welcome Eclipse";
    body:String;

    myName = "Shishupa";
   
   ngOnInit() 
   {
     this.body = "Welcome Content"  
     console.log("Welcome log");
   }

    constructor( private _httpService: EclipseService ) 
    {
      this.onTestGet();
      console.log("hsdsdsd");
    }
  
  onTestGet()
   {
     this._httpService.getTopics().subscribe(data => this.topics = data,
                                                  error => alert(error),
                                                ()=> console.log("Finished"));
   }

   onSubmit(value:any)
   {

     //var json = JSON.stringify(value);
     //console.log(json);
     this._httpService.postTopic(value).subscribe(data => this.topics = data,
                                                  error => alert(error),
                                                  ()=> console.log("Finished"));
     console.log(value+"onsubmit");
   }


 }