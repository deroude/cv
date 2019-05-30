import { Component, OnInit, Input } from '@angular/core';
import { LangService } from '../../services/lang/lang.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Project } from '../../domain/project';
import { Work } from '../../domain/work';
import fontawesome from '@fortawesome/fontawesome';
import { faChevronCircleRight, faChevronCircleDown } from '@fortawesome/fontawesome-free-solid';
import { Observable } from 'rxjs';

@Component({
  selector: 'work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {

  i18n: LangService;
  projects$: Observable<Project[]>;

  @Input()
  work: Work;

  projectsExpanded = false;

  constructor(private langSvc: LangService, private db: AngularFirestore) {
    this.i18n = langSvc;
    fontawesome.config.autoReplaceSvg = false;
    fontawesome.library.add(faChevronCircleDown, faChevronCircleRight);
  }

  ngOnInit() {
    this.projects$ = this.db.collection<Project>('projects', ref => ref.where('work', '==', this.work.slug)).valueChanges();
  }

  expandProjects() {
    this.projectsExpanded = !this.projectsExpanded;
    console.log(this.projectsExpanded);
  }

}
