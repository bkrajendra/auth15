import { NgModule } from '@angular/core';
import { AuthModule } from 'angular-auth-oidc-client';


@NgModule({
    imports: [AuthModule.forRoot({
        config: {
            authority: 'iocarein.us.auth0.com',
            redirectUrl: window.location.origin,
            clientId: '9U1KvIoOJTfgo7ZRrOMCsiewcXHLuVVk',
            scope: 'openid profile',
            responseType: 'code',
            silentRenew: true,
            useRefreshToken: true,
        }
      })],
    exports: [AuthModule],
})
export class AuthConfigModule {}
