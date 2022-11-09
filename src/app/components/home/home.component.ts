import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Router} from "@angular/router";
import {DataService} from "../../services/data.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @Output() showData:EventEmitter<any> = new EventEmitter<any>();

  userInfo:any;
  constructor(private router:Router,private dataService:DataService) {
  }

  occupations=["Businessman","Farmer", "Teacher","Lawyer","House-wife"]
  otherStates ={
    "indian":["Asam","Bihar","Bombay"],
    "pakistan":["Gilgit", "Islamad","Peshawar"],
  }
  onSubmit(){
    // console.log(this.userInfo.userName.firstName);
  }

  nextPage(){
    this.onSubmit();
    this.router.navigateByUrl("/page2");
    this.showData.emit(this.userInfo);
  }

  ngOnInit(): void {
    this.userInfo = this.dataService.getUserDate();
  }
}
