import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { LandingComponent } from './landing.component';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
    children: [
      { path: '', component: LandingPageComponent, pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LandingRoutingModule {}
