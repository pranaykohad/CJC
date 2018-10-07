import { Component, OnInit } from '@angular/core';
import { country } from '../model/country.model';
//import { CountryService } from '../service/country.service';


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  
  public countryList : country[];
  
  ngOnInit(): void {
      this._countryService.getCountryData().subscribe(data => {

        this.countryList = data;
      },
        error => {
          console.error('Error while getting Recent Notice data. Stack: ', error);
        }
      );
  }

 
  


  constructor(private _countryService : CountryService) {}

}
