import { Component, OnInit, Input } from '@angular/core';
import {DataService} from "../../services/data.service";

@Component({
  selector: 'app-datashow',
  templateUrl: './datashow.component.html',
  styleUrls: ['./datashow.component.css']
})
export class DatashowComponent implements OnInit {

  @Input() data:any;

  userData:any;
  constructor(private dataService:DataService) {

  }

  showData(data:any){
    // console.log(data);
  }

  ngOnInit(): void {
    this.userData = this.dataService.getUserDate();
    // console.log(this.userData.userName.firstName);
  }

}
