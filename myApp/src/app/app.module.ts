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
import { ScreeningModalFcsWristextensionPage } from '../pages/screening-modal-fcs-wristextension/screening-modal-fcs-wristextension';
import { ScreeningModalFcsCarryPage } from '../pages/screening-modal-fcs-carry/screening-modal-fcs-carry';
import { ScreeningModalFcsHorizontaladdPage } from '../pages/screening-modal-fcs-horizontaladd/screening-modal-fcs-horizontaladd';
import { ScreeningModalFcsJumpPage } from '../pages/screening-modal-fcs-jump/screening-modal-fcs-jump';
import { ScreeningModalFcsJumpsinglePage } from '../pages/screening-modal-fcs-jumpsingle/screening-modal-fcs-jumpsingle';
import { ScreeningYbtPage } from '../pages/screening-ybt/screening-ybt';
import { ScreeningModalYbtPage } from '../pages/screening-modal-ybt/screening-modal-ybt';
import { ScreeningModalYbtUpperPage } from '../pages/screening-modal-ybt-upper/screening-modal-ybt-upper';



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
    ScreeningModalFcsWristextensionPage,
    ScreeningModalFcsCarryPage,
    ScreeningModalFcsHorizontaladdPage,
    ScreeningModalFcsJumpPage,
    ScreeningModalFcsJumpsinglePage,
    ScreeningYbtPage,
    ScreeningModalYbtPage,
    ScreeningModalYbtUpperPage
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
    ScreeningModalFcsWristextensionPage,
    ScreeningModalFcsCarryPage,
    ScreeningModalFcsHorizontaladdPage,
    ScreeningModalFcsJumpPage,
    ScreeningModalFcsJumpsinglePage,
    ScreeningYbtPage,
    ScreeningModalYbtPage,
    ScreeningModalYbtUpperPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
