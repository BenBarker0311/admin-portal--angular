import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router'
import { LogInPageComponent } from './pages/login/log-in-page/log-in-page.component';
import { ForgetPasswordComponent } from './pages/login/forget-password/forget-password.component';
import { VerifyComponent } from './pages/login/verify/verify.component';
import { ResetComponent } from './pages/login/reset/reset.component';
import { ResetSuccessComponent } from './pages/login/reset-success/reset-success.component';
import { LocationDetailsComponent } from './pages/signup/location-details/location-details.component';
import { CompanyDetailsComponent } from './pages/signup/company-details/company-details.component';
import { AccountDetailsComponent } from './pages/signup/account-details/account-details.component';
import { InvalideLinkComponent } from './pages/signup/invalide-link/invalide-link.component';
import { ConfirmComponent } from './pages/signup/confirm/confirm.component';
import { DeskPageComponent } from './pages/desk/desk-page/desk-page.component';

import { AuthGuard } from './services/auth.guard';
import { Route } from './constants/routes'
import { UserResolver } from './services/user.resolver';
import { DeskAddComponent } from './pages/desk/desk-add/desk-add.component';
import { DeskAddMainComponent } from './pages/desk/desk-add-main/desk-add-main.component';
import { LocationSettingComponent } from './pages/location/location-setting/location-setting.component';
import { DeskEditComponent } from './pages/desk/desk-edit/desk-edit.component';
import { LocationResolver } from './services/location.resolover';
import { VerifyEmailComponent } from './pages/signup/verify/verify.email.component';
import { PhotoPageComponent } from './pages/photo/photo-page/photo-page.component';
import { AvailableHoursPageComponent } from './pages/available.hours/available-hours-page/available-hours-page.component';
import { ShortFormComponent } from './pages/available.hours/short-form/short-form.component';
import { LongFormComponent } from './pages/available.hours/long-form/long-form.component';

const routes: Routes = [
  { path: Route.LOGIN, component: LogInPageComponent },
  { path: Route.FORGET_PASSWORD, component: ForgetPasswordComponent },
  { path: Route.VERIFY_PASSWORD, component: VerifyComponent },
  { path: Route.RESET_PASSWORD, component: ResetComponent },
  { path: Route.RESET_SUCCESS, component: ResetSuccessComponent },
  { path: Route.SIGNUP_LOCATION, component: LocationDetailsComponent },
  { path: Route.SIGNUP_COMPANY, component: CompanyDetailsComponent },
  { path: Route.SIGNUP_VERIFY, component: VerifyEmailComponent },
  { path: Route.SIGNUP_ACCOUNT, component: AccountDetailsComponent },
  { path: Route.SIGNUP_CONFIRM, component: ConfirmComponent },
  { path: Route.SIGNUP_INVALID_LINK, component: InvalideLinkComponent },
  { path: Route.DESKS, component: DeskPageComponent, resolve: { currentUser: UserResolver, currentLocation: LocationResolver } },
  { path: Route.ADD_DESK_VERIFY, component: DeskAddComponent, resolve: { currentUser: UserResolver, currentLocation: LocationResolver } },
  { path: Route.ADD_DESK_MAIN, component: DeskAddMainComponent, resolve: { currentUser: UserResolver, currentLocation: LocationResolver } },
  { path: Route.LOCATION_SETTING, component: LocationSettingComponent, resolve: { currentUser: UserResolver, currentLocation: LocationResolver } },
  { path: Route.PHOTO, component: PhotoPageComponent },
  { path: Route.ABAILABLE_HOURS, component: AvailableHoursPageComponent },

  { path: 'short_form', component: ShortFormComponent },
  { path: 'long_form', component: LongFormComponent },
  { path: Route.ADD_DESK, redirectTo: Route.ADD_DESK_VERIFY, pathMatch: 'full' },
  { path: Route.EDIT_DESK, component: DeskEditComponent, resolve: { currentUser: UserResolver, currentLocation: LocationResolver } },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
