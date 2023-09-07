import { Component } from '@angular/core';
import { PatientService } from '../patient.service';
import { Patient } from '../patient';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  patient: Patient = new Patient();

  constructor(private patientService: PatientService, private router: Router) { }


  onSubmit() {
    this.patientService.register(this.patient).subscribe(data => {
        console.log("Registered successfully", data);
        
        // Navigate to the 'home' route after successful registration
        this.router.navigate(['/home']);
    }, error => {
        console.error("Registration failed", error);
    });
}
}
