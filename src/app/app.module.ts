import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FeaturesComponent } from './features/features.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { UploadComponent } from './upload/upload.component';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
    // RouterModule.forRoot(routes), // Import RouterModule.forRoot with an empty array
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    HomepageComponent,
    FeaturesComponent,
    HowItWorksComponent,
    UploadComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
