import { Component, OnInit } from '@angular/core';
import { ApiService } from '../app/services/api-service.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
// import {NgbDateStruct, NgbDatepicker} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'fhir-app-test';
  response: {};
 

  constructor(
    private apiService: ApiService,
  ) { }

  ngOnInit() {
    this.apiService.getPatients().subscribe(
      data => {
        console.log(data);
      }
    )

  }
  form = new FormGroup({
    allergies: new FormControl('', Validators.required),
    gender: new FormControl('Male', Validators.required),
    status: new FormControl('Select a Marital status', Validators.required),
    smoke: new FormControl('', Validators.required),
    drink: new FormControl('', Validators.required),
  });

  get f() {

      return this.form;
    
  }

  submit() {
    
    if(this.form.valid)
    {
      console.log(this.form.value);
    this.generateResponse();
    }
    
  }
  generateResponse() {
    this.response = {
      "Do you have allergies": this.form.value.allergies,
      "What is your gender": this.form.value.gender,
      "What is your marital status": this.form.value.status,
      "Do you smoke": this.form.value.smoke,
      "Do you drink": this.form.value.drink
    }
  }
}


