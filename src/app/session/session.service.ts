import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  private readonly DOCTOR_ID_KEY = 'patientId';

  constructor() { }

  setPatientId(doctorId: number): void {
    sessionStorage.setItem(this.DOCTOR_ID_KEY, doctorId.toString());
  }
  getPatientId(): number | null {
    const storedId = sessionStorage.getItem(this.DOCTOR_ID_KEY);
    return storedId ? +storedId : null;
  }
  clearSession(): void {
    sessionStorage.clear();
  }
}
