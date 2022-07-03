import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './layouts/footer/footer.component';
import { InputComponent } from './components/input/input.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [NavbarComponent, FooterComponent, InputComponent],
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  exports: [NavbarComponent, FooterComponent, InputComponent],
})
export class SharedModule {}
