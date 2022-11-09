import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Router} from "@angular/router";
import {DataService} from "../../services/data.service";
import {AppComponent} from "../../app.component";
import {FormGroup, FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @Output() showData:EventEmitter<any> = new EventEmitter<any>();
  userInfo:any;

  constructor(private router:Router,private dataService:DataService) {
  }

  // firstPageForm = new FormGroup(
  //   {
  //     // "user":new FormControl('',[Validators.required]),
  //     userId: new FormControl('',[Validators.required]),
  //   }
  // );

  // get userId(){
  //   return this.firstPageForm.get('userId');
  // }







  occupations=["Businessman","Farmer", "Teacher","Lawyer","House-wife"]
  otherStates ={
    "indian":["Asam","Bihar","Bombay"],
    "pakistan":["Gilgit", "Islamad","Peshawar"],
  }

  onSubmit(){
    // console.log(this.userInfo.userName.firstName);
  }


  nextPage(){
    this.onSubmit();
    this.dataService.setUserProgress(33);
    this.router.navigateByUrl("/page2");
    this.showData.emit(this.userInfo);
  }

  ngOnInit(): void {
    this.userInfo = this.dataService.getUserDate();
    this.dataService.setUserProgress(30);
  }
}
