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
  ManagerServiceComponent, ManagerPaymentSystemComponent, AdminComponent, AdminLoginComponent,
} from './pages';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppHeaderComponent } from './components/header/app-header.component';
import {InitLayoutComponent} from './pages/public/init-layout/init-layout.component';
import { FooterComponent } from './components/footer/footer.component';
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
import { ThanksComponent } from './pages/orders/thanks/thanks.component';
import { LoginpopupComponent } from './components/loginpopup/loginpopup.component';
import { AdminCreateComponent } from './pages/admin/admin-create/admin-create.component';
import { PostComponent } from './pages/admin/post/post.component';
import { PostAddComponent } from './pages/admin/post/post-add/post-add.component';
import { PostEditComponent } from './pages/admin/post/post-edit/post-edit.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { SigninComponent } from './components/signin/signin.component';
import { AdminSidebarComponent } from './components/admin-sidebar/admin-sidebar.component';
import { AdminHeaderComponent } from './components/admin-header/admin-header.component';
import { ProfileNavigationComponent } from './components/profile-navigation/profile-navigation.component';
import {UploadComponent} from './components/uploadFile/upload.component';
import {DialogComponent} from './components/uploadFile/dialog/dialog.component';
import { ImgComponent } from './components/img/img.component';
import { IsAppDownloadComponent } from './components/is-app-download/is-app-download.component';
import { BlogPostComponent } from './components/blog-post/blog-post.component';
import { CategoryListComponent } from './pages/admin/category-list/category-list.component';
import { CategoryAddComponent } from './pages/admin/category-list/category-add/category-add.component';
import { CategoryEditComponent } from './pages/admin/category-list/category-edit/category-edit.component';
import { FormNotificationComponent } from './components/form-notification/form-notification.component';
import {WebsocketModule} from "./websocket";
import {environment} from "../environments/environment";
import { NotificationAdminComponent } from './components/notification-admin/notification-admin.component';
import { CleanersListComponent } from './pages/admin/cleaners-list/cleaners-list.component';
import { CleanersAddComponent } from './pages/admin/cleaners-list/cleaners-add/cleaners-add.component';
import { CleanersEditComponent } from './pages/admin/cleaners-list/cleaners-edit/cleaners-edit.component';
import { NewOrdersStepSeroComponent } from './pages/orders/new-orders-step-sero/new-orders-step-sero.component';
import { OrderItemComponent } from './components/order-item/order-item.component';
import { OrderFooterComponent } from './components/order-footer/order-footer.component';
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
    AppHeaderComponent,
    InitLayoutComponent,
    FooterComponent,
    CleanersComponent,
    CleanersDetailComponent,
    SignupComponent,
    AdminCreateComponent,
    InitOrderComponent,
    ThanksComponent,
    PostComponent,
    PostAddComponent,
    PostEditComponent,
    DashboardComponent,
    LoginpopupComponent,
    SigninComponent,
    AdminSidebarComponent,
    AdminHeaderComponent,
    UploadComponent,
    DialogComponent,
    ProfileNavigationComponent,
    ImgComponent,
    IsAppDownloadComponent,
    BlogPostComponent,
    CategoryListComponent,
    CategoryAddComponent,
    CategoryEditComponent,
    FormNotificationComponent,
    NotificationAdminComponent,
    CleanersListComponent,
    CleanersAddComponent,
    CleanersEditComponent,
    NewOrdersStepSeroComponent,
    OrderItemComponent,
    OrderFooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    WebsocketModule.config({
        url: environment.ws
    })
  ],
  entryComponents: [
      LoginpopupComponent,
      DialogComponent,
  ],
  providers: [CookieService, {provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
