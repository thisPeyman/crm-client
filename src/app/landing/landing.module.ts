import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './landing.component';
import { SharedModule } from '../shared/shared.module';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { HeroComponent } from './components/landing-page/hero/hero.component';
import { CrmInfoComponent } from './components/landing-page/crm-info/crm-info.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LandingComponent,
    LandingPageComponent,
    AboutUsComponent,
    HeroComponent,
    CrmInfoComponent,
  ],
  imports: [
    CommonModule,
    LandingRoutingModule,
    SharedModule,
    ReactiveFormsModule,
  ],
})
export class LandingModule {}
