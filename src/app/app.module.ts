import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { StudentModule } from './student/student.module';
import { StudentService } from './service/student.service';
import { CountryService } from './service/country.service';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    StudentModule,
    HttpClientModule
  ],
  providers: [
    StudentService,
    CountryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
