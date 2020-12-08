import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { TermsofuseComponent } from './termsofuse/termsofuse.component';
import { PrivacypolicyComponent } from './privacypolicy/privacypolicy.component';
import { MainPageComponent } from './main-page/main-page.component';


const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'termsofuse', component: TermsofuseComponent },
  { path: 'privacypolicy', component: PrivacypolicyComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
