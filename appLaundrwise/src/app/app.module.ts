import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
  NewOrdersStepOneComponent,
  NewOrdersStepThreeComponent,
  NewOrdersStepTwoComponent,
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
  ManagerServiceComponent, ManagerPaymentSystemComponent, AdminComponent, AdminLoginComponent, AdminNewPostComponent
} from './pages';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppHeaderComponent } from './pages/public/header/app-header.component';
import {InitLayoutComponent} from './pages/public/init-layout/init-layout.component';
import { FooterComponent } from './pages/public/footer/footer.component';
import {MaterialModule} from './material-module';
import { CleanersComponent } from './pages/public/cleaners/cleaners.component';
import { CleanersDetailComponent } from './pages/public/cleaners-detail/cleaners-detail.component';
import { SignupComponent } from './pages/public/signup/signup.component';
import {MatNativeDateModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service';
import {ApiInterceptor} from './api.interceptor';
import { InitOrderComponent } from './pages/orders/init-order/init-order.component';
import { OrderHeaderComponent } from './pages/orders/order-header/order-header.component';
import { ThanksComponent } from './pages/orders/thanks/thanks.component';
import { LoginpopupComponent } from './pages/public/loginpopup/loginpopup.component';
import { AdminCreateComponent } from './pages/admin/admin-create/admin-create.component';
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
    NewOrdersStepOneComponent,
    NewOrdersStepTwoComponent,
    NewOrdersStepThreeComponent,
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
    AppHeaderComponent,
    InitLayoutComponent,
    FooterComponent,
    CleanersComponent,
    CleanersDetailComponent,
    SignupComponent,
    AdminCreateComponent,
    InitOrderComponent,
    OrderHeaderComponent,
    ThanksComponent,
    LoginpopupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [CookieService, {provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
