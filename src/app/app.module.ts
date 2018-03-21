import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { LangService } from './services/lang/lang.service';
import { TranslatePipe } from './services/lang/translate.pipe';


@NgModule({
  declarations: [
    AppComponent,
    TranslatePipe
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [LangService],
  bootstrap: [AppComponent]
})
export class AppModule { }
