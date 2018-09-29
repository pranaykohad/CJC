import { Injectable } from '@angular/core';
import { student } from '../database/studentData';

@Injectable()
export class StudentService {

  getStudentData(){
    return student;
  }
  
}
 