import { Component, OnInit } from '@angular/core';
import {DataService} from "../../services/data.service";

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  constructor(private dataService:DataService) { }
  userInfo:any;
  ngOnInit(): void {
    this.userInfo = this.dataService.getUserDate();
    console.log(this.userInfo.userName.firstName);
  }

  data:any;
  bdDistrict={
    "Gazipur":
      {"Kaliakair":{
        "Gazi Kal Thana 01":{
          "Gazi Kal 1 post 01":['Gazi kali 01 Vil 01', 'Gazi kali 01 Vil 02', 'Gazi kali 01 Vil 03'],
          "Gazi Kal 1 post 02":['Gazi kali 02 Vil 01', 'Gazi kali 02 Vil 02','Gazi kali 02 Vil 03'],
          },
          "Gazi Kal Thana 02":{
            "Gazi Kal 2 post 01":['Gazi kali 01 Vil 01', 'Gazi kali 01 Vil 02', 'Gazi kali 01 Vil 03'],
            "Gazi Kal 2 post 02":['Gazi kali 02 Vil 01', 'Gazi kali 02 Vil 02','Gazi kali 02 Vil 03'],
          }
        },
        "Sripor":{
          "Gazi sri Thana 01":{
            "Gazi sri 1 post 01":['Gazi kali 01 Vil 01', 'Gazi kali 01 Vil 02', 'Gazi kali 01 Vil 03'],
            "Gazi sri 1 post 02":['Gazi kali 02 Vil 01', 'Gazi kali 02 Vil 02','Gazi kali 02 Vil 03'],
          },
          "Gazi sri Thana 02":{
            "Gazi sri 2 post 01":['Gazi kali 01 Vil 01', 'Gazi kali 01 Vil 02', 'Gazi kali 01 Vil 03'],
            "Gazi sri 2 post 02":['Gazi kali 02 Vil 01', 'Gazi kali 02 Vil 02','Gazi kali 02 Vil 03'],
          }
          }
        },
    "Dhaka":
      {"Dhamrai":{
          "Dha Dham Thana 01":{
            "Dha Dham 1 post 01":['Gazi kali 01 Vil 01', 'Gazi kali 01 Vil 02', 'Gazi kali 01 Vil 03'],
            "Dhaka Dham 1 post 02":['Gazi kali 02 Vil 01', 'Gazi kali 02 Vil 02','Gazi kali 02 Vil 03'],
          },
          "Dha Dham Thana 02":{
            "Dha Dham 2 post 01":['Gazi kali 01 Vil 01', 'Gazi kali 01 Vil 02', 'Gazi kali 01 Vil 03'],
            "Dha Dham 2 post 02":['Gazi kali 02 Vil 01', 'Gazi kali 02 Vil 02','Gazi kali 02 Vil 03'],
          }
        },
        "Dhohar":{
          "Dha Dho Thana 01":{
            "Dha Dho 1 post 01":['Gazi kali 01 Vil 01', 'Gazi kali 01 Vil 02', 'Gazi kali 01 Vil 03'],
            "Dha Dho 1 post 02":['Gazi kali 02 Vil 01', 'Gazi kali 02 Vil 02','Gazi kali 02 Vil 03'],
          },
          "Dha Dho Thana 02":{
            "Dha Dho 2 post 01":['Gazi kali 01 Vil 01', 'Gazi kali 01 Vil 02', 'Gazi kali 01 Vil 03'],
            "Dha Dho 2 post 02":['Gazi kali 02 Vil 01', 'Gazi kali 02 Vil 02','Gazi kali 02 Vil 03'],
          }
        }
      },
  }

  postCodes =["1234","34","434","462"];
  districts:any;
  upazilas:any;
  policeStations:any
  postOffices:any;
  villages:any;

  setDistrict(data:any){
    this.districts = data;
  }

  setUpazilas(data:any){
    this.upazilas = data;
    this.policeStations = null;
    this.postOffices = null;
    this.villages = null;
  }
  setPoliceStations(data:any){
    this.policeStations = data;
    this.postOffices = null;
    this.villages = null;
  }
  setPostOffices(data:any){
    this.postOffices = data;
    this.villages = null;
  }
  setVillages(data:any){
    this.villages = data;
  }

  setData(data:any){
    this.data = data;
  }


  getD(){

  }
}
