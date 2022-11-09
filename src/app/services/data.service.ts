import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
  name = {
    "firstName":"",
    "midName":"",
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
    "id":"",
    "userName":{
      "prefixName":"",
      "firstName":"",
      "midName":"",
      "lastName":"",
      "suffixName":""
    },
    "fatherName":"",
    "fatherOccupation":"",
    "motherName":"",
    "motherOccupation":"",
    "presentAddress":{
      "village":"",
      "upazila":"",
      "policeStation":"",
      "postOffice":"",
      "postCode":"",
      "district":""
    },
    "permanentAddress":{
      "village":"",
      "upazila":"",
      "policeStation":"",
      "postOffice":"",
      "postCode":"",
      "district":""
    },
    "otherCountryAddress":{
      "addressLine1":"",
      "addressLine2":"",
      "City":"",
      "State":"",
    },
    "gender":"",
    "religion":"",
    "nationality":"",
    "mobileNumber":[],
    "phoneNumber":"",
    "email":"",
    "state":"",
    "medicalDisability":"",
    "dateOfBirth":"",
    "bloodGroup":"",
    "disability":"",
    "nationalIdNo":"",

    "postalCode":"",
    "passportNo":"",
    "tinNo":"",
    "maritalStatus":"",
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
