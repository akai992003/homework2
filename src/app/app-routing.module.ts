import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
// import { CaseListComponent } from './case-list/case-list.component';
// import { HeaderComponent } from './header/header.component';
// import { CaseComponent } from './case/case.component';
// import { CityComponent } from './city/city.component';
// import { InfoComponent } from './info/info.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  // { path: 'case-list', component: CaseListComponent, children: [{ path: '', component: HeaderComponent, outlet: 'header' }] },
  // { path: 'case-add', component: CaseComponent, children: [{ path: '', component: HeaderComponent, outlet: 'header' }] },
  // { path: 'case', component: CaseComponent, children: [{ path: '', component: HeaderComponent, outlet: 'header' }] },
  // { path: 'city', component: CityComponent, children: [{ path: '', component: HeaderComponent, outlet: 'header' }] },
  // { path: 'info', component: InfoComponent, children: [{ path: '', component: HeaderComponent, outlet: 'header' }] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  // imports: [RouterModule.forRoot(routes, { useHash: true, enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
