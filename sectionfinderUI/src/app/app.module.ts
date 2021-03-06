import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { PrivacypolicyComponent } from './privacypolicy/privacypolicy.component';
import { TermsofuseComponent } from './termsofuse/termsofuse.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { AddelementComponent } from './addelement/addelement.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { FooterComponent } from './footer/footer.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { UserComponent } from './user/user.component';




@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    AboutusComponent,
    PrivacypolicyComponent,
    TermsofuseComponent,
    AddelementComponent,
    ProductdetailsComponent,
    FooterComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgxPaginationModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },

    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
