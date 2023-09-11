import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PatientService } from '../patient/patient.service';
import { Patient } from '../patient/patient';
import { Doctor } from '../doctor/doctor';
import { DoctorService } from '../doctor/doctor.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  patients: Patient[] = [];
  doctors: Doctor[] = [];  // Assuming you have a Doctor model
  numberOfPatients: number = 0;
  numberOfDoctors: number = 0;

  constructor(
    private patientService: PatientService,
    private doctorService: DoctorService,
    private route: ActivatedRoute,
    private router:Router,
  ) {}

  ngOnInit(): void {
    this.route.url.subscribe(url => {
      if (url[1] && url[1].path === 'patients') {
        this.loadPatients();
      } else if (url[1] && url[1].path === 'doctors') {
        this.loadDoctors();
      } {
        this.loadStats();
      }
    });
    
  }

  loadPatients(): void {
    this.patientService.getPatients().subscribe(data => {
      this.patients = data;
    });
  }

  loadDoctors(): void {
    this.doctorService.getDoctors().subscribe(data => {
      this.doctors = data;
    });
  }
  loadStats(): void {
    this.patientService.getNumberOfPatients().subscribe(data => {
      this.numberOfPatients = data.count; // Extracting count from the response
    });
  
    this.doctorService.getNumberOfDoctors().subscribe(data => {
    
      this.numberOfDoctors = data.count; // Extracting count from the response
    
      
     });
  }
  goToAddDoctorForm() {
    this.router.navigate(['/add-doctor']);  // Navigate to form page
  }

  }