import { NgModule, APP_INITIALIZER } from '@angular/core';
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

import { KeycloakService } from './core/auth/keycloak.service';

export function kcFactory(keycloakService: KeycloakService): () => void {
  return () => keycloakService.init();
}

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
  providers: [
    KeycloakService,
    {
      provide: APP_INITIALIZER,
      useFactory: kcFactory,
      deps: [KeycloakService],
      multi: true
    }
  ],
  bootstrap: [JhiMainComponent]
})
export class Oauth2DemoAppModule {}
