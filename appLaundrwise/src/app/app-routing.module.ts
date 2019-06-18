import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
import {InitLayoutComponent} from './pages/public/init-layout/init-layout.component';
import {CleanersComponent} from './pages/public/cleaners/cleaners.component';
import {CleanersDetailComponent} from './pages/public/cleaners-detail/cleaners-detail.component';
import {SignupComponent} from './pages/public/signup/signup.component';

const routes: Routes = [
    {path: '', component: InitLayoutComponent, children: [
        {path: '', component: IndexComponent},
        {path: 'signup', component: SignupComponent},
        {path: 'about-us', component: AboutUsComponent},
        {path: 'how-it-works', component: HowItWorksComponent},
        {path: 'blogs', component: BlogsComponent},
        {path: 'blog/:id', component: BlogComponent},
        {path: 'faq', component: FaqComponent},
        {path: 'cleaners', component: CleanersComponent},
        {path: 'cleaners/:id', component: CleanersDetailComponent},
        {path: 'contacts', component: ContactsComponent},
        {path: 'new-order/first-step', component: NewOrdersStepOneComponent},
        {path: 'new-order/second-step', component: NewOrdersStepTwoComponent},
        {path: 'new-order/third-step', component: NewOrdersStepThreeComponent},
        {path: 'offers', component: OffersComponent},
        {path: 'become-our-service', component: BecomeOurServiceComponent},
        {path: 'our-partners', component: OurPartnersComponent},
    ]},
    {path: 'profile', component: ProfileComponent , children: [
      {path: 'my-profile', component: MyProfileComponent},
      {path: 'my-orders', component: MyOrdersComponent},
      {path: 'my-account', component: MyAccountComponent},
      {path: 'payment', component: PaymentComponent},
      {path: 'bonus', component: BonusComponent},
      {path: 'write-to-admin', component: WriteToAdminComponent},
      {path: '', redirectTo: 'my-profile', pathMatch: 'full'},
    ]},
    {path: 'delivery', component: DeliveryComponent , children: [
      {path: 'dashboard', component: DeliveryDashboardComponent},
      {path: 'all-orders', component: DeliveryAllOrdersComponent},
      {path: 'service', component: DeliveryServiceComponent},
      {path: 'payment-system', component: DeliveryPaymentSystemComponent},
      {path: 'collaborators', component: CollaboratorsComponent},
      {path: 'add-collaborator', component: AddCollaboratorComponent},
      {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
    ]},
    {path: 'manager', component: ManagerComponent , children: [
      {path: 'dashboard', component: ManagerDashboardComponent},
      {path: 'all-orders', component: ManagerAllOrdersComponent},
      {path: 'service', component: ManagerServiceComponent},
      {path: 'payment-system', component: ManagerPaymentSystemComponent},
      {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
    ]},
    {path: 'admin', component: AdminComponent , children: [
      {path: 'login', component: AdminLoginComponent},
      {path: 'new-post', component: AdminNewPostComponent},
      {path: '', redirectTo: 'login', pathMatch: 'full'},
    ]},
    {path: '**', component: NotFoundComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
