import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Doctor } from 'src/app/doctor/doctor';
import { DoctorService } from 'src/app/doctor/doctor.service';
@Component({
  selector: 'app-create-doctor',
  templateUrl: './create-doctor.component.html',
  styleUrls: ['./create-doctor.component.css']
})
export class CreateDoctorComponent {
  doctor: Doctor = new Doctor();
  constructor(private doctorService: DoctorService, private router:Router) { }

  onSubmit() {
    this.doctorService.addDoctor(this.doctor).subscribe(response => {
      alert('Doctor has been created successfully.');
      this.router.navigate(['/admin/doctors']);
      // Navigate back to doctor list or update the doctor list
      // Show success message
    }, error => {
      // Handle error
      console.log(error);
    });
  }
}
