import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Oauth2DemoSharedModule } from 'app/shared/shared.module';
import { HOME_ROUTE } from './home.route';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [Oauth2DemoSharedModule, RouterModule.forChild([HOME_ROUTE])],
  declarations: [HomeComponent]
})
export class Oauth2DemoHomeModule {}
