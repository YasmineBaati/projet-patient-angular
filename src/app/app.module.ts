import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ConsultationFormComponent } from './consultation/consultation-form.component';
import { PatientComponent } from './patient/patient.component';
import { DoctorComponent } from './doctor/doctor.component';
import { RouterOutlet } from "@angular/router";
import { RegisterComponent } from './patient/register/register.component';
import { QuestionnaireComponent } from './patient/questionnaire/questionnaire.component';
import { LoginComponent } from './patient/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PaymentComponent } from './patient/payment/payment.component';
import { PrescriptionComponent } from './patient/prescription/prescription.component';
import { AccountComponent } from './patient/account/account.component';
import { QRCodeModule } from 'angularx-qrcode';
import { AllPrescriptionsComponent } from './all-prescriptions/all-prescriptions.component';
import { ScoletteComponent } from './scolette/scolette.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { CreateDoctorComponent } from './admin-dashboard/create-doctor/create-doctor.component';
import { SidebarAdminComponent } from './admin-dashboard/sidebar-admin/sidebar-admin.component';
@NgModule({
    declarations: [
        AppComponent,
        DoctorComponent,
        ConsultationFormComponent,
        PatientComponent,
        RegisterComponent,
        QuestionnaireComponent,
        LoginComponent,
        PaymentComponent,
        PrescriptionComponent,
        AccountComponent,
        AllPrescriptionsComponent,
        ScoletteComponent,
        AdminDashboardComponent,
        CreateDoctorComponent,
        SidebarAdminComponent
        
        
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        ReactiveFormsModule,
        FormsModule,
        RouterOutlet,
        BrowserAnimationsModule,
        MatSidenavModule,
        MatListModule,
        MatIconModule,
        QRCodeModule
    ]
})
export class AppModule { }
