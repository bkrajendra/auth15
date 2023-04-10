import { NgModule } from '@angular/core';
import { AuthModule } from 'angular-auth-oidc-client';


@NgModule({
    imports: [AuthModule.forRoot({
        config: {
            authority: 'https://iocarein.us.auth0.com',
            redirectUrl: window.location.origin,
            clientId: '9U1KvIoOJTfgo7ZRrOMCsiewcXHLuVVk',
            scope: 'openid profile',
            responseType: 'code',
            silentRenew: true,
            useRefreshToken: true,
            postLogoutRedirectUri: 'http://localhost:4200'
        }
      })],
    exports: [AuthModule],
})
export class AuthConfigModule {}
