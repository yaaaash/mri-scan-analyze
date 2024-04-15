// main.ts

import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { ApplicationConfig } from '@angular/core';
import { AppComponent } from './app/app.component';
import { RouterModule, Routes } from '@angular/router';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

const config: ApplicationConfig = {
  providers: [], // Add providers array here if needed
  ...appConfig
};

// bootstrapApplication(AppComponent, config)
//   .catch((err) => console.error(err));

  platformBrowserDynamic().bootstrapModule(AppModule).catch(err => console.error(err));
