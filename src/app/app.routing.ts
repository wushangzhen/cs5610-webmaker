import {Routes, RouterModule} from '@angular/router';​

import {LoginComponent} from './views/user/login/login.component';​
import {ProfileComponent} from './views/user/profile/profile.component';
import {RegisterComponent} from './views/user/register/register.component';
import {WebsiteListComponent} from './views/website/website-list/website-list.component';
import {WebsiteNewComponent} from './views/website/website-new/website-new.component';
import {WebsiteEditComponent} from './views/website/website-edit/website-edit.component';
import {PageListComponent} from './views/page/page-list/page-list.component';


const appRoutes: Routes = [​
  { path: '', component: LoginComponent},
  { path: 'login', component: LoginComponent},
  { path: 'user/:uid' , component: ProfileComponent},​
  { path: 'register', component: RegisterComponent},
  { path: 'user/:uid/website' , component: WebsiteListComponent},
  { path: 'user/:uid/website/new', component: WebsiteNewComponent},
  { path: 'user/:uid/website/:wid', component: WebsiteEditComponent},
  { path: 'user/:uid/website/:websiteid/page', component:PageListComponent}
];​

export const routing = RouterModule.forRoot(appRoutes);

​
