import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { LangService } from './services/lang/lang.service';
import { AngularFirestore } from 'angularfire2/firestore';
import { Work } from './domain/work';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/combineLatest';
import { Education } from './domain/education';
import { Project } from './domain/project';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title: string = 'Valentin Răduți';
  work$: Observable<Work[]>;
  education$: Observable<Education[]>;

  constructor(private titleService: Title, private langSvc: LangService, private db: AngularFirestore) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
    this.work$ = this.db.collection<Work>("work-experience", ref => ref.orderBy('date-start', "desc")).valueChanges()
      .combineLatest(this.db.collection<Project>("projects").valueChanges(),
        (w, p) => w.map(wx => {
          if (wx.projects)
            wx.projectObjs = wx.projects.map(ps => p.find(px => px.slug === ps));
          return wx;
        })
      );
    this.education$ = this.db.collection<Education>("education", ref => ref.orderBy('date-start', "desc")).valueChanges();
  }

}
