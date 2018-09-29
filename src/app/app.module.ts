import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StudentModule } from './student/student.module';
import { StudentService } from './service/student.service';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    StudentModule
  ],
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
