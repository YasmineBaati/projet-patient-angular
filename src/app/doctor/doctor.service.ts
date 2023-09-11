import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Doctor } from './doctor';
import { environment } from 'src/environnement/environment';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  private apiServerUrl =environment.apiBaseUrl;

  constructor(private http: HttpClient) { }
  private apiUrl = 'http://localhost:8080/api/doctors';

  public getDoctors(): Observable<Doctor[]> {
    return this.http.get<Doctor[]>(`${this.apiServerUrl}/api/doctors`);
  }
    //COUNT DOCTORES
    getNumberOfDoctors(): Observable<any> {
      return this.http.get<any>(`${this.apiUrl}/count`); // Replace with your API endpoint
    }
    addDoctor(doctor: Doctor): Observable<any> {
      const url = 'http://localhost:8080/api/doctors';  // Replace with your API endpoint
      return this.http.post(url, doctor);
    }
}
