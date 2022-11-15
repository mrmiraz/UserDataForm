import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Page2Component} from "./components/page2/page2.component";
import {DataService} from "./services/data.service";

interface dataType{
  name:string;
  id:string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  progress!:number;
  constructor(private  dataService:DataService) {
    this.dataService.updateProgres.subscribe(res=>{
      this.progress = res;
    });
  }

  userInfo = {
    "fatherName":"",
  }

  parentFunction(data:any){
    this.userInfo = data;
    console.log(data);
  }

  title = 'walker';

}


