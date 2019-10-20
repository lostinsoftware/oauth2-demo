import { Injectable } from '@angular/core';

declare const Keycloak: any;
@Injectable({
  providedIn: 'root'
})
export class KeycloakService {
  public keycloakAuth: any;

  constructor() {}

  init(): Promise<any> {
    return new Promise((resolve, reject) => {
      const config = {
        url: 'http://localhost:9080/auth',
        realm: 'jhipster',
        clientId: 'web_app',
        credentials: 'web_app'
      };
      this.keycloakAuth = new Keycloak(config);
      this.keycloakAuth
        .init({ onLoad: 'login-required' })
        .success(() => {
          resolve();
        })
        .error(() => {
          reject();
        });
    });
  }

  getToken(): string {
    if (this.keycloakAuth === undefined) return undefined;
    return this.keycloakAuth.token;
  }
}
