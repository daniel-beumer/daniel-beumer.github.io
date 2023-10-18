import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, HomeComponent,CommonModule],
    providers:[],
    bootstrap: [AppComponent]
})
export class AppModule { }