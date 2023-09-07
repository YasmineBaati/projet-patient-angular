import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PatientService } from '../patient.service';
import { SessionService } from 'src/app/session/session.service';
import { Patient } from '../patient';

@Component({
  selector: 'app-patient-form',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  patientForm!: FormGroup;
  patient!: Patient;


  constructor(private formBuilder: FormBuilder,
    private patientService : PatientService,
    private sessionService: SessionService
    ) {}

  ngOnInit() {
    this.patientForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', Validators.required]
    });
  }
  fetchDoctor(){
    this.patientService.getOnePatient(this.sessionService.getPatientId()).subscribe(
      (retrievedPatient:Patient) =>{
        this.patient = retrievedPatient;
      },
      (error) => {
        console.error('Error fetching doctor data:', error);

      }
    )
  }


  onSubmit() {
    if (this.patientForm.valid) {
      // Handle form submission here
      const formData = this.patientForm.value;
      console.log(formData);
    }
  }
}
