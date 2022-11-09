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
    "gender":"",
    "religion":"",
    "nationality":"",
    "mobileNumber":"",
    "phoneNumber":"",
    "email":"",
    "state":"",
    "bloodGroup":"",
    "disability":"",
  }

  setUserData(data:any){
    this.userInfo = data;
  }

  getUserDate(){
    return this.userInfo;
  }
}
