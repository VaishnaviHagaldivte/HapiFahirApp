import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api-service.service';
import { Patients } from '../Patients';

@Component({
  selector: 'app-patientstable',
  templateUrl: './patientstable.component.html',
  styleUrls: ['./patientstable.component.scss']
})
export class PatientstableComponent implements OnInit {

  constructor(private as: ApiService) { }

  columns=["Id", "Name", "Gender", "DOB"];
  reqTime: any;
  patients: any;
  temp: any;
  ngOnInit(): void {
    var start = window.performance.now();
    this.as.getPatients().subscribe((response)=> {
      
      this.temp = response
      this.patients= [];
      let obj = {}
      for(let i=0;i<this.temp.entry.length;i++) {
        obj = {
          id: this.temp.entry[i].resource.id,
          name: this.temp.entry[i].resource.name[0].given[0],
          gender: this.temp.entry[i].resource.gender,
          dob: this.temp.entry[i].resource.birthdate
        }
        this.patients.push(obj)
      }
    },
    (error)=> console.log(error))
    var end = window.performance.now();
    this.reqTime = (end - start).toFixed(2) + ' ms';
  }
  


}
