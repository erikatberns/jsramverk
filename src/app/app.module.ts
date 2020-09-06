import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MeComponent } from './me/me.component';
import { ReportComponent } from './report/report.component';
import { WeekComponent } from './week/week.component';
// import { WeekComponent } from './report/week/week.component';
// import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
  { path: 'me', component: MeComponent },
  { path: 'reports/week/1', component: ReportComponent },
  { path: '',
    redirectTo: '/me',
    pathMatch: 'full'
  },
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MeComponent,
    ReportComponent,
    WeekComponent
    // WeekComponent,
    // ReportComponent,
    // PageNotFoundComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
