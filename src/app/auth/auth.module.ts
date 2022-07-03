import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { StoreModule } from '@ngrx/store';
import { AuthFeature } from './+state/auth.feature';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './+state/auth.effects';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthService } from './shared/auth.service';
import { SideInfoComponent } from './components/side-info/side-info.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    RegisterComponent,
    SideInfoComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    StoreModule.forFeature(AuthFeature),
    EffectsModule.forFeature([AuthEffects]),
    SharedModule,
    ReactiveFormsModule,
  ],
  providers: [AuthService],
})
export class AuthModule {}
