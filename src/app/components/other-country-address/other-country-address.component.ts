import { Component, OnInit } from '@angular/core';
import {DataService} from "../../services/data.service";

@Component({
  selector: 'app-other-country-address',
  templateUrl: './other-country-address.component.html',
  styleUrls: ['./other-country-address.component.css']
})
export class OtherCountryAddressComponent implements OnInit {

  constructor(private dataService:DataService) { }
  userInfo:any;
  ngOnInit(): void {
    this.userInfo = this.dataService.getUserDate();
    console.log(this.userInfo.userName.firstName);
  }
  data:any;
}
