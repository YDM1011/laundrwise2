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
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AuthInterceptor, OrderService, PaymentService, ProfileService} from './services';
import {FormsModule} from '@angular/forms';
import {AuthentificationService} from './services';
import {HeaderComponent} from './components';
import {DynamicChangeStepOrderService} from "./subjects";

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
    HeaderComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
      HttpClientModule,
    ],
  providers: [
    AuthentificationService,
    OrderService,
    ProfileService,
    DynamicChangeStepOrderService,
    PaymentService,
      {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
