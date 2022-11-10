import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {DataService} from "../../services/data.service";
import {FormGroup, FormControl, Validators,FormBuilder, FormArray} from '@angular/forms'
import {Data} from "@angular/router";

import {
  MatDateRangeSelectionStrategy,
  DateRange,
  MAT_DATE_RANGE_SELECTION_STRATEGY,
} from '@angular/material/datepicker';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css'],

})

export class Page2Component implements OnInit {

  @Output() parentFunction: EventEmitter<any> = new EventEmitter<any>();
  userInfo:any;
  mir:any;
  constructor(private dataService:DataService) {
    this.userInfo = dataService.userInfo;
    this.dataService.progress = 33;
    // console.log(this.userInfo.userName.firstName);
  }

  mobile=[""];
  addMobile(mobile:any){
    mobile.push(mobile.toString());
  }



  page2Form = new FormGroup({
    nationalId:new FormControl('',[Validators.email]),
    // "name":new FormControl('',[Validators.required, Validators.email]),
  })
  //
  // get userBloodGroup(){
  //   return this.page2DataForm.get('userBloodGroup')!;
  // }
  //
  // get name(){
  //   return this.page2DataForm.get('name')!;
  // }
  ngOnInit(): void {
    this.parentFunction.emit();
  }
  bloodGroup=["A+","A-","B+","B-","AB+","AB-","O+","O-"];
  maritalStatus =["Married","Unmarried","Other"];
  diability=["vision Impairment","deaf or hard of hearing","mental health conditions.","intellectual disability","acquired brain injury","physical disability","Other"];
  page2DataSubmit(data:any){
    console.log(this.userInfo);
    console.log(this.userInfo.bloodGroup);
    console.log(this.userInfo.email);


  }

}
