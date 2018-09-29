import { Component, OnInit } from '@angular/core';
import { Student } from '../model/student.model';
import { StudentService } from '../service/student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {

  public info: Student[];

  constructor(private _studentService: StudentService) { 
      this.info = _studentService.getStudentData();
  }

}
