import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClarityModule  } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VendorAdministrationComponent } from './page/administration/vendor-administration/vendor-administration.component';
import { NotFoundComponent } from './page/not-found/not-found.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {ErrorInterceptor, JwtInterceptor} from './_helpers';
import {KudosAddComponent} from './kudos-add/kudos-add.component';
import {HomeComponent} from './home';
import {AdminComponent} from './admin';
import {ClrFormsModule} from '@clr/angular';
import {FormsModule} from '@angular/forms';
import { KudosDashboardComponent } from './kudos-dashboard/kudos-dashboard.component';
import { KudosEditComponent } from './kudos-edit/kudos-edit.component';
import { Globals } from './globals';
import { MonitoringService } from './_services/monitoring.service';
import { MonitoringErrorHandler } from './_helpers/error.handler';

@NgModule({
  declarations: [
    AppComponent,
    VendorAdministrationComponent,
    NotFoundComponent,
    LoginPageComponent,
    KudosAddComponent,
    HomeComponent,
    AdminComponent,
    KudosDashboardComponent,
    KudosEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ClrFormsModule,
    ClarityModule,
    BrowserAnimationsModule
  ],
  providers: [Globals, MonitoringService,
    {
      provide: ErrorHandler,
      useClass: MonitoringErrorHandler
    }
    // {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    // { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
