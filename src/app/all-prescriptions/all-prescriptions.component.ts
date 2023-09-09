import { Component, OnInit } from '@angular/core';
import { PrescriptionService } from '../patient/prescription/prescription.service';
import { SessionService } from '../session/session.service';
import { Prescription } from '../patient/prescription/prescription';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-all-prescriptions',
  templateUrl: './all-prescriptions.component.html',
  styleUrls: ['./all-prescriptions.component.css']
})
export class AllPrescriptionsComponent implements OnInit {
  allPrescriptions!: any; // Input for prescription information
  patientId!: any

  constructor(
    private prescriptionService : PrescriptionService,
    private sessionService : SessionService,

    ) { }

    ngOnInit(): void {
      this.patientId = this.sessionService.getPatientId()
      console.log(this.patientId)
      this.prescriptionService.getAllPrescriptionsByPatientId(this.patientId).subscribe(
        (response : Prescription[]) => {
          this.allPrescriptions = response
          console.log((this.allPrescriptions))
        },
        (error:HttpErrorResponse) => {
          console.log(error)
        }
      )

    }
    
}
