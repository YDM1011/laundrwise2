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
  ManagerServiceComponent, ManagerPaymentSystemComponent, AdminComponent, AdminLoginComponent, AdminNewPostComponent
} from './pages';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {ApiService, AuthInterceptor, OrderService, PaymentService, ProfileService} from './services';
import {FormsModule} from '@angular/forms';
import {AuthentificationService} from './services';
import {HeaderComponent} from './components';
import {AuthGuard} from './guards/auth.guard';

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
    PaymentService,
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
