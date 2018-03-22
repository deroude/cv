import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { LangService } from './services/lang/lang.service';
import { TranslatePipe } from './services/lang/translate.pipe';
import { EducationComponent } from './components/education/education.component';
import { WorkComponent } from './components/work/work.component';
import { ProjectComponent } from './components/project/project.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SkillComponent } from './components/skill/skill.component';


@NgModule({
  declarations: [
    AppComponent,
    TranslatePipe,
    EducationComponent,
    WorkComponent,
    ProjectComponent,
    SkillComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [LangService],
  bootstrap: [AppComponent]
})
export class AppModule { }
