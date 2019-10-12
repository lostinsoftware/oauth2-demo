import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { Oauth2DemoSharedModule } from 'app/shared/shared.module';
import { Oauth2DemoCoreModule } from 'app/core/core.module';
import { Oauth2DemoAppRoutingModule } from './app-routing.module';
import { Oauth2DemoHomeModule } from './home/home.module';
import { Oauth2DemoEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { JhiMainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ActiveMenuDirective } from './layouts/navbar/active-menu.directive';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    Oauth2DemoSharedModule,
    Oauth2DemoCoreModule,
    Oauth2DemoHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    Oauth2DemoEntityModule,
    Oauth2DemoAppRoutingModule
  ],
  declarations: [JhiMainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, ActiveMenuDirective, FooterComponent],
  bootstrap: [JhiMainComponent]
})
export class Oauth2DemoAppModule {}
