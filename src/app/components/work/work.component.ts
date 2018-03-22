import { Component, OnInit, Input } from '@angular/core';
import { LangService } from '../../services/lang/lang.service';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Project } from '../../domain/project';
import { Work } from '../../domain/work';

@Component({
  selector: 'work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {

  i18n: LangService;
  projects$:Observable<Project[]>;

  @Input()
  work:Work;

  constructor(private langSvc: LangService, private db: AngularFirestore) {
    this.i18n = langSvc;
  }

  ngOnInit() {
    this.projects$=this.db.collection<Project>("projects",ref=>ref.where("work","==",this.work.slug)).valueChanges();
  }

}
