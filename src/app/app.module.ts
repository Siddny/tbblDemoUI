import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  NgModule,
  CUSTOM_ELEMENTS_SCHEMA,
  NO_ERRORS_SCHEMA,
} from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Http, RequestOptions } from '@angular/http';


import { AuthHttp, AuthConfig } from 'angular2-jwt';

import { environment } from '../environments/environment';
import { ServiceWorkerModule } from '@angular/service-worker';

// material imports
import { MatStepperModule } from '@angular/material';

import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
// import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { MatChipsModule } from '@angular/material/chips';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatListModule } from '@angular/material/list';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import {
  MatNativeDateModule,
  MatFormFieldModule,
  MatDatepickerModule,
} from '@angular/material';
import {
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';

import { AppComponent } from './app.component';
import  { ServiceService } from './services/service.service';

import { routing } from './app.routing';

import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireModule } from 'angularfire2';
import { LoginComponent } from './components/login/login.component';
import { 
    LandingComponent, 
    NewClientDialog,
  } from './components/landing/landing.component';
import { CallsComponent } from './components/calls/calls.component';

export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp(new AuthConfig(), http, options);
}

@NgModule({

  declarations: [
    AppComponent,
    LoginComponent,
    LandingComponent,
    CallsComponent,
    NewClientDialog,
  ],

  imports: [
    routing,
    BrowserModule,
    BrowserAnimationsModule,
    MatNativeDateModule,
    MatRadioModule,
    MatStepperModule,
    MatCardModule,
  	MatTabsModule,
  	MatSidenavModule,
  	MatIconModule,
  	MatToolbarModule,
  	MatButtonModule,
  	MatInputModule,
  	MatDatepickerModule,
  	MatSelectModule,
  	MatDialogModule,
  	MatChipsModule,
  	MatSnackBarModule,
  	MatTooltipModule,
  	HttpModule,
  	HttpClientModule,
  	MatFormFieldModule,
  	FormsModule,
  	ReactiveFormsModule,
  	MatListModule,
  	MatCheckboxModule,
  	MatExpansionModule,
  	MatProgressBarModule,
    ServiceWorkerModule.register('/ngsw-worker.js', {enabled: environment.production}),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],

  providers: [
  	HttpModule,
  	HttpClientModule,
    ServiceService,
  ],

  bootstrap: [AppComponent],

  entryComponents: [
    NewClientDialog,
  ],

  schemas: [
    NO_ERRORS_SCHEMA,
    CUSTOM_ELEMENTS_SCHEMA
  ],
})

export class AppModule { }
