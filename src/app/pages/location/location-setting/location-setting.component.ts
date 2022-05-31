/**
 * Page for location_setting
 */

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import MenuItem from 'src/app/constants/menu.item';
import { LocationDetails } from 'src/app/interfaces/location.details';
import { CommonApiService } from 'src/app/services/api-services/common.api.service';
import { Api } from 'src/app/constants/api';
import { AuthService } from 'src/app/services/auth.service';
import { NotificationService } from 'src/app/services/notification.service'
@Component({
  selector: 'app-location-setting',
  templateUrl: './location-setting.component.html',
  styleUrls: ['./location-setting.component.css']
})

export class LocationSettingComponent implements OnInit {
  
  form: FormGroup;
  menuItem: any = MenuItem;
  locationId: string;
  locationDetails: LocationDetails = {
    description: '',
    privateInformation: '',
    phoneNumber: '',
    facilities: [],
    email: '',
    website: ''
  };
  currentUser: any;
  isFirst: boolean = true;
  facilityList: any;
  facilityClass: string = "me-3 btn-facility";
  facilityActiveClass: string = "me-3 btn-facility active";
  notificationClass: string = "toast align-items-center text-white main border-0";
  isNotificationShow: boolean = false;
  
  constructor(
    public formBuilder: FormBuilder,
    public apiService: CommonApiService,
    public userService: AuthService,
    public notificationService: NotificationService,
    public activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.initFormBuilder();
    this.activeRoute.data.subscribe(data => {
      this.currentUser = data.currentUser;
    })

    this.locationId = this.userService.currentLocation.id;
    this.locationDetails = this.userService.currentLocation.details || {
      description: '',
      privateInformation: '',
      phoneNumber: '',
      facilities: [],
      email: '',
      website: ''
    };

    this.form.get('description')?.setValue(this.locationDetails.description);
    this.form.get('privateInformation')?.setValue(this.locationDetails.privateInformation);
    this.form.get('phoneNumber')?.setValue(this.locationDetails.phoneNumber);
    this.form.get('email')?.setValue(this.locationDetails.email);
    this.form.get('website')?.setValue(this.locationDetails.website);
    this.apiService.read(Api.FACILITY, true).subscribe(facilities => {
      this.facilityList = facilities || [];
      this.facilityList = this.facilityList.map((facility: any) => {
        const index: number = this.locationDetails.facilities.find(locationFacility => locationFacility.id === facility.id);
        if (index) {
          return { ...facility, class: this.facilityActiveClass};
        }
        
        return {
          ...facility,
          class: this.facilityClass
        }
      })
      this.locationDetails.facilities = [];
    });
  }

  private initFormBuilder() {
    this.form = this.formBuilder.group({
      description: ['',
        Validators.required
      ],
      privateInformation: ['',
        Validators.required
      ],
      phoneNumber: ['',
        Validators.required,
      ],
      email: ['',[
        Validators.required,
        Validators.email
      ]],
      website: ['',
        Validators.required,
      ],
    });
  }

  disableFirst() {
    this.isFirst = false;
    return true;
  }

  onFacility(index: number) {
    if (this.facilityList[index].class == this.facilityClass || this.facilityList[index].class == undefined)
      this.facilityList[index].class = this.facilityActiveClass;
    else
      this.facilityList[index].class = this.facilityClass;
  }
  
  onCloseNotification() {
    this.isNotificationShow = false;
    this.notificationClass = "toast align-items-center text-white main border-0";
    console.log("onCloseNotification", this.isNotificationShow);
  }

  onSave() { 
    this.facilityList.forEach((facility: any) => {
      if (facility.class == this.facilityActiveClass)
        this.locationDetails.facilities.push(facility);
    });

    this.locationDetails.description = this.form.get('description')?.value;
    this.locationDetails.privateInformation = this.form.get('privateInformation')?.value;
    this.locationDetails.phoneNumber = this.form.get('phoneNumber')?.value;
    this.locationDetails.email = this.form.get('email')?.value;
    this.locationDetails.website = this.form.get('website')?.value;

    this.apiService.create(`${Api.LOCATION}/${this.locationId}/details`, this.locationDetails, true).subscribe(detail => {
      // this.isNotificationShow = true;
      // this.notificationClass = "toast show align-items-center text-white main border-0";
      this.notificationService.showSuccess('Setting saved', 'location setting');
    });
  }
}
