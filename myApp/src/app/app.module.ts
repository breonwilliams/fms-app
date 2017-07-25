import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ManageClientsPage } from '../pages/manage-clients/manage-clients';
import { RecentScreensPage } from '../pages/recent-screens/recent-screens';
import { TermsConditionsPage } from '../pages/terms-conditions/terms-conditions';
import { LogoutPage } from '../pages/logout/logout';
import { ClientDetailsPage } from '../pages/client-details/client-details';
import { ScreenResultsPage } from '../pages/screen-results/screen-results';
import { EditProfilePage } from '../pages/edit-profile/edit-profile';
import { NewClientPage } from '../pages/new-client/new-client';
import { ScreeningFmsPage } from '../pages/screening-fms/screening-fms';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ManageClientsPage,
    RecentScreensPage,
    TermsConditionsPage,
    LogoutPage,
    ClientDetailsPage,
    ScreenResultsPage,
    EditProfilePage,
    NewClientPage,
    ScreeningFmsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ManageClientsPage,
    RecentScreensPage,
    TermsConditionsPage,
    LogoutPage,
    ClientDetailsPage,
    ScreenResultsPage,
    EditProfilePage,
    NewClientPage,
    ScreeningFmsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
