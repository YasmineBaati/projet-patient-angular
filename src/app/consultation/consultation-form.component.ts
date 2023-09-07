import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { ConsultationService } from './consultation.service';
import { Consultation } from './consultation';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-consultation-form',
  templateUrl: './consultation-form.component.html',
  styleUrls: ['./consultation-form.component.css']

})
export class ConsultationFormComponent {
  consultationForm: FormGroup;
  consultations: Consultation[] = [];

  

  constructor(private fb: FormBuilder,
    private consultationService: ConsultationService,
    private http: HttpClient

    ) {

    this.consultationForm = this.fb.group({
      status: ['pending', Validators.required],
      startTime: ['', Validators.required],
      endTime: ['', Validators.required],
      concerns: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      diseases: ['', [Validators.minLength(3), Validators.maxLength(30)]],
      previous: [false] // Set the default value to false
    }); 
  }
  ngOnInit(): void {
    this.consultationService.getConsultations().subscribe(
      (response: Consultation[]) => {
        this.consultations = response;
      },
      (error) => {
        console.error('Failed to fetch consultations', error);
      }
    );


  }
  openVideoCall(link:string): void {
    window.open(`https://localhost:3003/r/${link}`);
  }
  

  // public onSubmit(): void {
  //   this.consultationService.createConsultation(this.consultationForm.value).subscribe(
  //     (response: Consultation) =>{
  //       console.log(response);

  //     },
  //     (error: HttpErrorResponse) =>{
  //       alert(error.message);
  //     }
  //   );
  //   };

  };

