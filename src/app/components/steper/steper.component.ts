import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import {Router} from "@angular/router";
import {DataService} from "../../services/data.service";

@Component({
  selector: 'app-steper',
  templateUrl: './steper.component.html',
  styleUrls: ['./steper.component.css'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: {displayDefaultIndicatorType: false},
    },
  ],
})
export class SteperComponent implements OnInit {

  updateProgress!:number;
  constructor(private _formBuilder: FormBuilder,private router:Router, private _dataService: DataService) {
    _dataService.updateProgres.subscribe(res=>{
      this.updateProgress = res;
    })
  }

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });

  page2(){
    this.router.navigateByUrl('/home');
  }

  ngOnInit(): void {
    this._dataService.updateProgres.next(33);
  }

}
