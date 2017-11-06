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
import { ScreeningModalPage } from '../pages/screening-modal/screening-modal';
import { ScreenHistoryPage } from '../pages/screen-history/screen-history';
import { ComingSoonPage } from '../pages/coming-soon/coming-soon';
import { ScreeningFcsPage } from '../pages/screening-fcs/screening-fcs';
import { ScreeningModalFcsPage } from '../pages/screening-modal-fcs/screening-modal-fcs';
import { ScreeningModalFcsLowermcsPage } from '../pages/screening-modal-fcs-lowermcs/screening-modal-fcs-lowermcs';
import { ScreeningYbtPage } from '../pages/screening-ybt/screening-ybt';
import { ScreeningModalYbtPage } from '../pages/screening-modal-ybt/screening-modal-ybt';



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
    ScreeningFmsPage,
    ScreeningModalPage,
    ScreenHistoryPage,
    ComingSoonPage,
    ScreeningFcsPage,
    ScreeningModalFcsPage,
    ScreeningModalFcsLowermcsPage,
    ScreeningYbtPage,
    ScreeningModalYbtPage
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
    ScreeningFmsPage,
    ScreeningModalPage,
    ScreenHistoryPage,
    ComingSoonPage,
    ScreeningFcsPage,
    ScreeningModalFcsPage,
    ScreeningModalFcsLowermcsPage,
    ScreeningYbtPage,
    ScreeningModalYbtPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
