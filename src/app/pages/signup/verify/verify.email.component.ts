import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { CommonApiService } from 'src/app/services/api-services/common.api.service';
import { Api } from 'src/app/constants/api';
import { Route } from 'src/app/constants/routes';
import { Extra } from 'src/app/constants/extra';
@Component({
  selector: 'app-verify',
  templateUrl: './verify.email.component.html',
  styleUrls: ['./verify.email.component.css']
})
export class VerifyEmailComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private apiService: CommonApiService) { }

  ngOnInit(): void {
    this.route.params.subscribe(param => {
      this.apiService.read(`${Api.VERIFY_EMAIL}/${param?.code}`, false)
      .subscribe((response: any) => {
        if (response.result = Extra.REQUEST_SUCCESS)
          this.router.navigate([Route.LOGIN]);
        else
          this.router.navigate([Route.SIGNUP_INVALID_LINK]);
      }, (error: any) => {
        this.router.navigate([Route.SIGNUP_INVALID_LINK]);
      })
    })
  }

}

