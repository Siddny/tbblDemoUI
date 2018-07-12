import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';

import { routing } from './app.routing';
import { RouterModule, } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule }     from '@angular/material/card';
import { MatTabsModule }     from '@angular/material/tabs';
import { MatSidenavModule }  from '@angular/material/sidenav';
import { MatIconModule }     from '@angular/material/icon';
import { MatToolbarModule }  from '@angular/material/toolbar';
import { MatButtonModule }   from '@angular/material/button';
import { MatInputModule }    from '@angular/material/input';
import { MatDatepickerModule }from '@angular/material/datepicker';
import { MatSelectModule }   from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { MatChipsModule } from '@angular/material/chips';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatListModule } from '@angular/material/list';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatExpansionModule } from '@angular/material/expansion';
import {
        MatNativeDateModule,
        MatFormFieldModule
        } from '@angular/material';
import {
        FormsModule,
        ReactiveFormsModule,
        } from '@angular/forms';


import { RegistrationComponent } from './components/registration/registration.component';
import { LoginComponent } from './components/login/login.component';
import {
  AdminComponent,
  NewApplicationDialog,
  NewSubscriptionDialog,
} from './components/admin/admin.component';
import {
    GroupsComponent,
    NewGroupDialog,
    GrpPermissionsDialog,
    InviteUserDialog,
    UserGrpDialog,
    ListPermissionsDialog,
  } from './components/groups/groups.component';
import {APP_BASE_HREF} from '@angular/common';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        AdminComponent,
        NewApplicationDialog,
        NewSubscriptionDialog,
        GroupsComponent,
        NewGroupDialog,
        GrpPermissionsDialog,
        InviteUserDialog,
        UserGrpDialog,
        ListPermissionsDialog,
        RegistrationComponent,
        LoginComponent,
        ],
      imports: [
        RouterModule,
        BrowserModule,
        BrowserAnimationsModule,
        routing,
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
        MatFormFieldModule,
        FormsModule,
        ReactiveFormsModule,
        MatListModule,
        MatCheckboxModule,
        MatExpansionModule,
      ],
      providers: [
        {
          provide: APP_BASE_HREF, 
          useValue: '/'
        },
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));
  // it('should render title in a h1 tag', async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
  // }));
});
