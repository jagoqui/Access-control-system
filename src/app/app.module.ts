// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
// Firebase
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFireAnalyticsModule} from '@angular/fire/analytics';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import 'firebase/firestore';
// Components
import { AppComponent } from './app.component';
import { RFIdReceptorComponent } from './components/rf-id-receptor/rf-id-receptor.component';
import { CreateNewUserComponent } from './components/create-new-user/create-new-user.component';
import { ViewUsersComponent } from './components/view-users/view-users.component';
import { ModalComponentComponent } from './components/modal-component/modal-component.component';
@NgModule({
  declarations: [
    AppComponent,
    RFIdReceptorComponent,
    CreateNewUserComponent,
    ViewUsersComponent,
    ModalComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAnalyticsModule,
    AngularFirestoreModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
