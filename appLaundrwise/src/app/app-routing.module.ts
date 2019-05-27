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
import {AuthGuard} from './guards/auth.guard';

const routes: Routes = [
  {path: '', component: IndexComponent},
  {path: 'about-us', component: AboutUsComponent},
  {path: 'new-order', component: NewOrderComponent},
  {path: 'how-it-works', component: HowItWorksComponent},
  {path: 'blogs', component: BlogsComponent},
  {path: 'faq', component: FaqComponent},
  {path: 'offers', component: OffersComponent},
  {path: 'become-our-service', component: BecomeOurServiceComponent},
  {path: 'contacts', component: ContactsComponent},
  {path: 'our-partners', component: OurPartnersComponent},
  {path: 'blog/:id', component: BlogComponent},
  {path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] , children: [
      {path: 'my-profile', component: MyProfileComponent},
      {path: 'my-orders', component: MyOrdersComponent},
      {path: 'my-account', component: MyAccountComponent},
      {path: 'payment', component: PaymentComponent},
      {path: 'bonus', component: BonusComponent},
      {path: 'write-to-admin', component: WriteToAdminComponent},
      {path: '', redirectTo: 'my-profile', pathMatch: 'full'},
    ]},
  {path: 'delivery', component: DeliveryComponent, canActivate: [AuthGuard] , children: [
      {path: 'dashboard', component: DeliveryDashboardComponent},
      {path: 'all-orders', component: DeliveryAllOrdersComponent},
      {path: 'service', component: DeliveryServiceComponent},
      {path: 'payment-system', component: DeliveryPaymentSystemComponent},
      {path: 'collaborators', component: CollaboratorsComponent},
      {path: 'add-collaborator', component: AddCollaboratorComponent},
      {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
    ]},
  {path: 'manager', component: ManagerComponent, canActivate: [AuthGuard] , children: [
      {path: 'dashboard', component: ManagerDashboardComponent},
      {path: 'all-orders', component: ManagerAllOrdersComponent},
      {path: 'service', component: ManagerServiceComponent},
      {path: 'payment-system', component: ManagerPaymentSystemComponent},
      {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
    ]},
  {path: 'admin', component: AdminComponent , children: [
      {path: 'signIn', component: AdminLoginComponent},
      {path: 'new-post', component: AdminNewPostComponent},
      {path: '', redirectTo: 'signIn', pathMatch: 'full'},
    ]},
  {path: '**', component: NotFoundComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
