import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import {Router} from "@angular/router";
import {DataService} from "../../services/data.service";
import {AppComponent} from "../../app.component";
import {FormGroup, FormControl, Validators, FormBuilder} from "@angular/forms";
import {MatChipInputEvent} from '@angular/material/chips';
import {COMMA, ENTER} from "@angular/cdk/keycodes";

export interface Fruit {
  name: string;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  @Output() showData:EventEmitter<any> = new EventEmitter<any>();
  userInfo:any;
  @Input() homeTrue:number = 1;
  six = 6;
  constructor(private _formBuilder:FormBuilder, private router:Router,private dataService:DataService) {
  }

  userId = new FormControl("",[Validators.email]);
  userPreffixName = new FormControl("",[Validators.pattern('/[a-zA-Z]*/'), Validators.required]);
  firstFormGroup = this._formBuilder.group({
    userId: this.userId,
    userPreffixName: this.userPreffixName,
  });

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

  country = ["Bangladesh", "India","Pakistan"];
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

  addOnBlur = true;

  mobilePrefix="+880";
  setMobilePrefix(mobilePrefix:any){
    this.mobilePrefix = mobilePrefix;
  }

  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    // Add our fruit
    if (value) {
      this.userInfo.mobileNumber.push({mobile: this.mobilePrefix+value});
    }
    // Clear the input value
    event.chipInput!.clear();
  }

   mobileNumber = [];
  remove(mobileNumber1: any): void {
    const index = this.userInfo.mobileNumber.indexOf(mobileNumber1);

    if (index >= 0) {
      this.userInfo.mobileNumber.splice(index, 1);
    }
  }

  ngOnInit(): void {
    this.userInfo = this.dataService.getUserDate();
    this.dataService.setUserProgress(30);
  }
}
