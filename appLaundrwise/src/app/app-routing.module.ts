import { NgModule } from '@angular/core';
import {Routes, RouterModule, CanActivate} from '@angular/router';
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
  MyProfileComponent,
  NotFoundComponent,
  OffersComponent,
  OurPartnersComponent,
  PaymentComponent,
  ProfileComponent,
  WriteToAdminComponent,
    AdminComponent,
    AdminLoginComponent
} from './pages';
import {InitLayoutComponent} from './pages/public/init-layout/init-layout.component';
import {CleanersComponent} from './pages/public/cleaners/cleaners.component';
import {CleanersDetailComponent} from './pages/public/cleaners-detail/cleaners-detail.component';
import {SignupComponent} from './pages/public/signup/signup.component';
import {AdminCreateComponent} from './pages/admin/admin-create/admin-create.component';
import {InitOrderComponent} from './pages/orders/init-order/init-order.component';
import {AdminLoginedGuard} from './admin-logined.guard';
import {AdminLogoutGuard} from './admin-logout.guard';
import {PostComponent} from './pages/admin/post/post.component';
import {PostAddComponent} from './pages/admin/post/post-add/post-add.component';
import {PostEditComponent} from './pages/admin/post/post-edit/post-edit.component';
import {DashboardComponent} from './pages/admin/dashboard/dashboard.component';
import {IsLoginGuard} from './is-login.guard';
import {SigninComponent} from './components/signin/signin.component';
import {CategoryEditComponent} from './pages/admin/category-list/category-edit/category-edit.component';
import {CategoryAddComponent} from './pages/admin/category-list/category-add/category-add.component';
import {CategoryListComponent} from './pages/admin/category-list/category-list.component';
import {CleanersListComponent} from './pages/admin/cleaners-list/cleaners-list.component';
import {CleanersEditComponent} from './pages/admin/cleaners-list/cleaners-edit/cleaners-edit.component';
import {CleanersAddComponent} from './pages/admin/cleaners-list/cleaners-add/cleaners-add.component';
import {ProductAddComponent} from './pages/admin/category-list/product-add/product-add.component';
import {ProductEditComponent} from './pages/admin/category-list/product-edit/product-edit.component';
import {SettingComponent} from './pages/admin/setting/setting.component';
import {AddCountryComponent} from './pages/admin/setting/add-country/add-country.component';
import {DeliveryListComponent} from './pages/admin/delivery-list/delivery-list.component';
import {DeliveryAddComponent} from './pages/admin/delivery-list/delivery-add/delivery-add.component';
import {DeliveryEditComponent} from './pages/admin/delivery-list/delivery-edit/delivery-edit.component';
import {NotificationListComponent} from './pages/admin/notification-list/notification-list.component';
import {StatisticComponent} from './pages/profile/statistic/statistic.component';
import {CollaboratorsComponent} from "./pages/profile/collaborators/collaborators.component";
import {InitOrderTypeComponent} from "./pages/orders/init-order/init-order-type/init-order-type.component";
import {AllComponent} from "./pages/profile/my-profile/all/all.component";
import {NewComponent} from "./pages/profile/my-profile/new/new.component";
import {WaitingComponent} from "./pages/profile/my-profile/waiting/waiting.component";
import {DoneComponent} from "./pages/profile/my-profile/done/done.component";
import {FaqAdminComponent} from "./pages/admin/faq/faqAdmin.component";

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
        {path: 'offers', component: OffersComponent},
        {path: 'become-our-service', component: BecomeOurServiceComponent},
        {path: 'our-partners', component: OurPartnersComponent},
    ]},
    {path: 'orders', component: InitOrderComponent, canActivate: [IsLoginGuard], children: [
            {path: ':cleanerId/:type', component: InitOrderTypeComponent, canActivate: [IsLoginGuard]},
        ]},
    {path: 'profile', component: ProfileComponent, canActivate: [IsLoginGuard], children: [
      {path: '', component: MyProfileComponent, children: [
              {path: '', component: MyProfileComponent},
              {path: 'all', component: AllComponent},
              {path: 'new', component: NewComponent},
              {path: 'waiting', component: WaitingComponent},
              {path: 'done', component: DoneComponent},
      ]},

      {path: 'account', component: MyAccountComponent},
      {path: 'payment', component: PaymentComponent},
      {path: 'bonuses', component: BonusComponent},
      {path: 'collaborators', component: CollaboratorsComponent},
      {path: 'dashboard', component: DashboardComponent},
      {path: 'setting', component: StatisticComponent},
      {path: 'write-to-admin', component: WriteToAdminComponent},
      {path: '', redirectTo: 'profile', pathMatch: 'full'},
    ]},
    {path: 'admin', component: AdminComponent , children: [
        {path: 'dashboard', component: DashboardComponent, canActivate: [AdminLoginedGuard]},
        {path: 'posts', component: PostComponent, canActivate: [AdminLoginedGuard]},
        {path: 'faq', component: FaqAdminComponent, canActivate: [AdminLoginedGuard]},
        {path: 'post-add', component: PostAddComponent, canActivate: [AdminLoginedGuard]},
        {path: 'post-edit/:id', component: PostEditComponent, canActivate: [AdminLoginedGuard]},
        {path: 'category', component: CategoryListComponent, canActivate: [AdminLoginedGuard]},
        {path: 'category-add/:cleanerId', component: CategoryAddComponent, canActivate: [AdminLoginedGuard]},
        {path: 'category-edit/:id', component: CategoryEditComponent, canActivate: [AdminLoginedGuard]},
        {path: 'product-add/:id', component: ProductAddComponent, canActivate: [AdminLoginedGuard]},
        {path: 'product-edit/:id', component: ProductEditComponent, canActivate: [AdminLoginedGuard]},
        {path: 'cleaners', component: CleanersListComponent, canActivate: [AdminLoginedGuard]},
        {path: 'cleaner-add', component: CleanersAddComponent, canActivate: [AdminLoginedGuard]},
        {path: 'cleaner-edit/:id', component: CleanersEditComponent, canActivate: [AdminLoginedGuard]},
        {path: 'delivery', component: DeliveryListComponent, canActivate: [AdminLoginedGuard]},
        {path: 'delivery-add', component: DeliveryAddComponent, canActivate: [AdminLoginedGuard]},
        {path: 'delivery-edit/:id', component: DeliveryEditComponent, canActivate: [AdminLoginedGuard]},
        {path: 'setting', component: SettingComponent, canActivate: [AdminLoginedGuard]},
        {path: 'setting/add-country', component: AddCountryComponent, canActivate: [AdminLoginedGuard]},
        {path: 'notification/:id', component: NotificationListComponent, canActivate: [AdminLoginedGuard]},
        {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
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
