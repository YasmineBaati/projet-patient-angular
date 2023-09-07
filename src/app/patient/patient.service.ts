import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Patient } from './patient';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PatientService {
  
  private apiUrl: string = 'http://localhost:8080/api/patient'; // adjust this to your backend URL

  constructor(private http: HttpClient) { }

  register(patient: Patient) {
    return this.http.post<Patient>(`${this.apiUrl}/register`, patient);
  }

  public getOnePatient(patientId: any): Observable<Patient> {
    return this.http.get<Patient>(`${this.apiUrl}/api/patients/${patientId}`);
  }}