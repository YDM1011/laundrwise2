import { NgModule } from '@angular/core';
import {Routes, RouterModule, CanActivate} from '@angular/router';
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
  ManagerServiceComponent, ManagerPaymentSystemComponent, AdminComponent, AdminLoginComponent
} from './pages';
import {InitLayoutComponent} from './pages/public/init-layout/init-layout.component';
import {CleanersComponent} from './pages/public/cleaners/cleaners.component';
import {CleanersDetailComponent} from './pages/public/cleaners-detail/cleaners-detail.component';
import {SignupComponent} from './pages/public/signup/signup.component';
import {AdminCreateComponent} from './pages/admin/admin-create/admin-create.component';
import {InitOrderComponent} from './pages/orders/init-order/init-order.component';
import {ThanksComponent} from './pages/orders/thanks/thanks.component';
import {AdminLoginedGuard} from './admin-logined.guard';
import {AdminLogoutGuard} from './admin-logout.guard';
import {PostComponent} from './pages/admin/post/post.component';
import {PostAddComponent} from './pages/admin/post/post-add/post-add.component';
import {PostEditComponent} from './pages/admin/post/post-edit/post-edit.component';
import {DashboardComponent} from './pages/admin/dashboard/dashboard.component';
import {IsLoginGuard} from './is-login.guard';
import {SigninComponent} from './components/signin/signin.component';

const routes: Routes = [
    {path: '', component: InitLayoutComponent, children: [
        {path: '', component: IndexComponent, children: [
            {path: 'signin', component: SigninComponent}
            ]},
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
    {path: 'orders', component: InitOrderComponent, children: [
        {path: '', component: NewOrdersStepOneComponent},
        {path: 'step2', component: NewOrdersStepTwoComponent},
        {path: 'step3', component: NewOrdersStepThreeComponent},
        {path: 'thanks', component: ThanksComponent},
    ]},
    {path: 'profile', component: ProfileComponent, canActivate: [IsLoginGuard], children: [
      {path: '', component: MyProfileComponent},
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

        {path: 'dashboard', component: DashboardComponent, canActivate: [AdminLoginedGuard]},
        {path: 'posts', component: PostComponent, canActivate: [AdminLoginedGuard]},
        {path: 'post-add', component: PostAddComponent, canActivate: [AdminLoginedGuard]},
        {path: 'post-edit', component: PostEditComponent, canActivate: [AdminLoginedGuard]},

        {path: '', redirectTo: 'login', pathMatch: 'full'},
    ]},
    {path: 'admin/login', component: AdminLoginComponent, canActivate: [AdminLogoutGuard]},
    {path: 'admin/create', component: AdminCreateComponent, canActivate: [AdminLogoutGuard]},
    {path: '**', component: NotFoundComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
