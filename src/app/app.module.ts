import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSelectModule} from '@angular/material/select';
import { Page2Component } from './components/page2/page2.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import { DatashowComponent } from './components/datashow/datashow.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from "@angular/material/core";
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AddressComponent } from './components/address/address.component';
import {MatBadgeModule} from "@angular/material/badge";
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatSliderModule} from "@angular/material/slider";
import {MatChipsModule} from '@angular/material/chips';
import { OtherCountryAddressComponent } from './components/other-country-address/other-country-address.component';
import { SteperComponent } from './components/steper/steper.component';
import {MatStepperModule} from "@angular/material/stepper";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Page2Component,
    DatashowComponent,
    HeaderComponent,
    FooterComponent,
    AddressComponent,
    OtherCountryAddressComponent,
    SteperComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatGridListModule,
    MatSelectModule,
    AppRoutingModule,
    FlexLayoutModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatBadgeModule,
    MatProgressBarModule,
    MatSliderModule,
    MatChipsModule,
    MatStepperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

