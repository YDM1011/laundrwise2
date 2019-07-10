import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  AboutUsComponent,
  BecomeOurServiceComponent,
  BlogComponent,
  BlogsComponent,
  BonusComponent,
  ContactsComponent,
  FaqComponent,
  HowItWorksComponent,
  IndexComponent,
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
  ProfileComponent,
  WriteToAdminComponent,
  AdminComponent,
  AdminLoginComponent,
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
import {WebsocketModule} from './websocket';
import {environment} from '../environments/environment';
import { NotificationAdminComponent } from './components/notification-admin/notification-admin.component';
import { CleanersListComponent } from './pages/admin/cleaners-list/cleaners-list.component';
import { CleanersAddComponent } from './pages/admin/cleaners-list/cleaners-add/cleaners-add.component';
import { CleanersEditComponent } from './pages/admin/cleaners-list/cleaners-edit/cleaners-edit.component';
import { NewOrdersStepSeroComponent } from './pages/orders/new-orders-step-sero/new-orders-step-sero.component';
import { OrderItemComponent } from './components/order-item/order-item.component';
import { OrderFooterComponent } from './components/order-footer/order-footer.component';
import { CategoryIncludedComponent } from './components/category-included/category-included.component';
import { SuperManagerFormComponent } from './components/super-manager-form/super-manager-form.component';
import { ProductAddComponent } from './pages/admin/category-list/product-add/product-add.component';
import { ProductEditComponent } from './pages/admin/category-list/product-edit/product-edit.component';
import { SettingComponent } from './pages/admin/setting/setting.component';
import { AddCountryComponent } from './pages/admin/setting/add-country/add-country.component';
import { DeliveryListComponent } from './pages/admin/delivery-list/delivery-list.component';
import { DeliveryAddComponent } from './pages/admin/delivery-list/delivery-add/delivery-add.component';
import { DeliveryEditComponent } from './pages/admin/delivery-list/delivery-edit/delivery-edit.component';
import { NotificationLabelComponent } from './components/notification-label/notification-label.component';
import { SelectLocationComponent } from './components/select-location/select-location.component';
import {NotificationListComponent} from './pages/admin/notification-list/notification-list.component';
import { StatisticComponent } from './pages/profile/statistic/statistic.component';
import {CollaboratorsComponent} from './pages/profile/collaborators/collaborators.component';
import { DashboardProfileComponent } from './pages/profile/dashboard-profile/dashboard-profile.component';
import { CollaboratorsItemComponent } from './components/collaborators-item/collaborators-item.component';
import { SelectCompanyComponent } from './components/select-company/select-company.component';
import { InitOrderTypeComponent } from './pages/orders/init-order/init-order-type/init-order-type.component';
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
    CategoryIncludedComponent,
    SuperManagerFormComponent,
    ProductAddComponent,
    ProductEditComponent,
    SettingComponent,
    AddCountryComponent,
    DeliveryListComponent,
    DeliveryAddComponent,
    DeliveryEditComponent,
    NotificationLabelComponent,
    NotificationListComponent,
    SelectLocationComponent,
    StatisticComponent,
    CollaboratorsComponent,
    DashboardComponent,
    DashboardProfileComponent,
    CollaboratorsItemComponent,
    SelectCompanyComponent,
    InitOrderTypeComponent
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
      SuperManagerFormComponent,
      CategoryIncludedComponent,
      DialogComponent,
  ],
  providers: [CookieService, {provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
