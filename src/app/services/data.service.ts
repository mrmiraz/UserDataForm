import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  updateProgres = new Subject<number>();

  constructor() { }
  name = {
    firstName:"",
    midName:"",
    "lastName":"",
    "suffixName":""
  }

  address = {
    "village":"",
    "upazila":"",
    "policeStation":"",
    "postOffice":"",
    "postCode":"",
    "district":""
  }

  userInfo ={
    id:"",
    userName:{
      prefixName:"",
      firstName:"",
      midName:"",
      lastName:"",
      suffixName:""
    },
    fatherName:"",
    fatherOccupation:"",
    m0otherName:"",
    motherOccupation:"",
    presentAddress:{
      village:"",
      upazila:"",
      policeStation:"",
      postOffice:"",
      postCode:"",
      district:""
    },
    permanentAddress:{
      village:"",
      upazila:"",
      policeStation:"",
      postOffice:"",
      postCode:"",
      district:""
    },
    otherCountryAddress:{
      addressLine1:"",
      addressLine2:"",
      city:"",
      state:"",
    },
    gender:"",
    religion:"",
    nationality:"Bangladesh",
    mobileNumber:[],
    phoneNumber:"",
    email:"",
    state:"",
    medicalDisability:"",
    dateOfBirth:"",
    bloodGroup:"",
    disability:"",
    nationalIdNo:"",
    postalCode:"",
    passportNo:"",
    tinNo:"",
    maritalStatus:"",
  }

  setUserData(data:any){
    this.userInfo = data;
  }

  getUserDate(){
    return this.userInfo;
  }

  progress = 0;

  getUserProgress():number{
    return this.progress;
  }

  setUserProgress(newProgress:number){
    this.progress = newProgress;
  }

  ngOnInit(): void {
  }
}
