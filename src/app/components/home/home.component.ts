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

  six = 6;
  constructor(private router:Router,private dataService:DataService) {
  }

  // firstForm = new FormGroup(
  //   {
  //     // "user":new FormControl('',[Validators.required]),
  //     userBloodGroup: new FormControl('',[Validators.required]),
  //   }
  // );
  //
  // get userBlood(){
  //   return this.firstForm.get('userBloodGroup');
  // }


  mobileCountryCode =["+93","+213","+880"]
  occupations=["Businessman","Farmer", "Teacher","Lawyer","House-wife"]
  otherStates ={
    "indian":["Asam","Bihar","Bombay"],
    "pakistan":["Gilgit", "Islamad","Peshawar"],
  }

  setMobile(mobilePreffix:string, mobileSuffix:string){
    this.userInfo.mobileNumber.push(mobilePreffix+mobileSuffix);
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
