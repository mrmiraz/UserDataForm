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
}
