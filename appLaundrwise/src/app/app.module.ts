import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  AboutUsComponent,
  AddCollaboratorComponent,
  DeliveryAllOrdersComponent,
  BecomeOurServiceComponent,
  BlogComponent,
  BlogsComponent,
  BonusComponent,
  CollaboratorsComponent,
  ContactsComponent,
  DeliveryDashboardComponent,
  DeliveryComponent,
  FaqComponent,
  HowItWorksComponent,
  IndexComponent,
  ManagerComponent,
  MyAccountComponent,
  MyOrdersComponent,
  MyProfileComponent,
  NewOrderComponent,
  NotFoundComponent,
  OffersComponent,
  OurPartnersComponent,
  PaymentComponent,
  DeliveryPaymentSystemComponent,
  ProfileComponent,
  DeliveryServiceComponent,
  WriteToAdminComponent,
  ManagerDashboardComponent,
  ManagerAllOrdersComponent,
  ManagerServiceComponent,
  ManagerPaymentSystemComponent,
  AdminComponent,
  AdminLoginComponent,
  AdminNewPostComponent,
  ArticleComponent, SignupComponent
} from './pages';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {ApiService, AuthInterceptor} from './services';
import {FormsModule} from '@angular/forms';
import {AuthentificationService} from './services';
import {DialogOverviewComponent, FooterComponent, FormOnPublicPagesComponent, HeaderComponent} from './components';
import {AuthGuard} from './guards/auth.guard';
import {MAT_DIALOG_DEFAULT_OPTIONS} from '@angular/material';
import {MatDialogModule, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    NotFoundComponent,
    AboutUsComponent,
    HowItWorksComponent,
    BlogsComponent,
    BlogComponent,
    FaqComponent,
    ContactsComponent,
    BecomeOurServiceComponent,
    OurPartnersComponent,
    OffersComponent,
    NewOrderComponent,
    ProfileComponent,
    MyProfileComponent,
    MyOrdersComponent,
    MyAccountComponent,
    PaymentComponent,
    BonusComponent,
    WriteToAdminComponent,
    DeliveryComponent,
    DeliveryDashboardComponent,
    DeliveryAllOrdersComponent,
    DeliveryServiceComponent,
    DeliveryPaymentSystemComponent,
    CollaboratorsComponent,
    AddCollaboratorComponent,
    ManagerComponent,
    ManagerDashboardComponent,
    ManagerAllOrdersComponent,
    ManagerServiceComponent,
    ManagerPaymentSystemComponent,
    AdminComponent,
    AdminLoginComponent,
    AdminNewPostComponent,
    HeaderComponent,
    FooterComponent,
    ArticleComponent,
    DialogOverviewComponent,
    SignupComponent,
    FormOnPublicPagesComponent
  ],
  entryComponents: [
    DialogOverviewComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
      HttpClientModule,
      MatDialogModule,
      BrowserAnimationsModule,
      ReactiveFormsModule
    ],
  providers: [
    {
      provide: MatDialogRef,
      useValue: {}
    }, {
      provide: MAT_DIALOG_DATA,
      useValue: {}
    },
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}},
    AuthentificationService,
    AuthGuard,
    ApiService,
      {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
