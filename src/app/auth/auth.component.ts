import { Component, OnInit } from '@angular/core';
import { MobileDetectService } from '../core/services/mobile-detect.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  isDeviceMobile: boolean;

  constructor(private mobileDetect: MobileDetectService) {
    this.isDeviceMobile = this.mobileDetect.isDeviceMobile;
  }

  ngOnInit(): void {}
}
