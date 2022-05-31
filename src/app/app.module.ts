import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { QRCodeModule } from 'angular2-qrcode';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LogInPageComponent } from './pages/login/log-in-page/log-in-page.component';
import { AngularMaterialModule  } from './angular-material-module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ForgetPasswordComponent } from './pages/login/forget-password/forget-password.component';
import { VerifyComponent } from './pages/login/verify/verify.component';
import { ResetComponent } from './pages/login/reset/reset.component';
import { ResetSuccessComponent } from './pages/login/reset-success/reset-success.component';
import { LocationDetailsComponent } from './pages/signup/location-details/location-details.component';
import { CompanyDetailsComponent } from './pages/signup/company-details/company-details.component';
import { AccountDetailsComponent } from './pages/signup/account-details/account-details.component';
import { InvalideLinkComponent } from './pages/signup/invalide-link/invalide-link.component';
import { ConfirmComponent } from './pages/signup/confirm/confirm.component';
import { VerifyEmailComponent } from './pages/signup/verify/verify.email.component';
import { DeskPageComponent } from './pages/desk/desk-page/desk-page.component';
import { NoDeskComponent } from './pages/desk/no-desk/no-desk.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LogoComponent } from './components/logo/logo.component';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/auth.guard';
import { UserResolver } from './services/user.resolver';
import { DeskFormComponent } from './pages/desk/desk-form/desk-form.component';
import { DeskAddComponent } from './pages/desk/desk-add/desk-add.component';
import { DeskAddMainComponent } from './pages/desk/desk-add-main/desk-add-main.component';
import { LocationSettingComponent } from './pages/location/location-setting/location-setting.component';
import { DeskInputFormComponent } from './pages/desk/desk-input-form/desk-input-form.component';
import { DeskEditComponent } from './pages/desk/desk-edit/desk-edit.component';
import { DeskService } from './services/desk.services';
import { LocationResolver } from './services/location.resolover';
import { NotificationComponent } from './components/notification/notification.component';
import { ToastrModule } from 'ngx-toastr';
import { NotificationService } from './services/notification.service';
import { PhotoPageComponent } from './pages/photo/photo-page/photo-page.component';
import { NoPhotoComponent } from './pages/photo/no-photo/no-photo.component';
import { AvailableHoursPageComponent } from './pages/available.hours/available-hours-page/available-hours-page.component';
import { AvailableScheduleComponent } from './pages/available.hours/available-schedule/available-schedule.component';
import { ShortFormComponent } from './pages/available.hours/short-form/short-form.component';
import { LongFormComponent } from './pages/available.hours/long-form/long-form.component';
import { TimeSelectComponent } from './components/time-select/time-select.component';

@NgModule({
  declarations: [
    AppComponent,
    LogInPageComponent,
    ForgetPasswordComponent,
    VerifyComponent,
    ResetComponent,
    ResetSuccessComponent,
    LocationDetailsComponent,
    CompanyDetailsComponent,
    AccountDetailsComponent,
    InvalideLinkComponent,
    VerifyEmailComponent,
    ConfirmComponent,
    LogoComponent,
    SidebarComponent,
    DeskPageComponent,
    NoDeskComponent,
    DeskFormComponent,
    DeskAddComponent,
    DeskAddMainComponent,
    LocationSettingComponent,
    DeskInputFormComponent,
    DeskEditComponent,
    NotificationComponent,
    PhotoPageComponent,
    NoPhotoComponent,
    AvailableHoursPageComponent,
    AvailableScheduleComponent,
    ShortFormComponent,
    LongFormComponent,
    TimeSelectComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatIconModule,
    AngularMaterialModule,
    FlexLayoutModule,
    HttpClientModule,
    QRCodeModule,
    ToastrModule.forRoot()
  ],
  providers: [
    AuthService, 
    AuthGuard, 
    UserResolver, 
    DeskService, 
    LocationResolver, 
    NotificationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
