import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

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
    NgbModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [LangService],
  bootstrap: [AppComponent]
})
export class AppModule { }
