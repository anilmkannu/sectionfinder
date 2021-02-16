import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { TermsofuseComponent } from './termsofuse/termsofuse.component';
import { PrivacypolicyComponent } from './privacypolicy/privacypolicy.component';
import { MainPageComponent } from './main-page/main-page.component';
import { AddelementComponent } from './addelement/addelement.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { UserComponent } from './user/user.component';


const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'termsofuse', component: TermsofuseComponent },
  { path: 'privacypolicy', component: PrivacypolicyComponent },
  { path: 'addelement', component: AddelementComponent },
  { path: 'productdetails/:sectionId', component: ProductdetailsComponent },
  { path: 'login', component: UserComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
