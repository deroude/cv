import { Component, OnInit, HostListener, ViewChild, ElementRef } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { LangService } from './services/lang/lang.service';
import { AngularFirestore } from 'angularfire2/firestore';
import { Work } from './domain/work';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/combineLatest';
import { Education } from './domain/education';
import { Project } from './domain/project';
import { Skill } from './domain/skill';
import { FreeText } from './domain/free-text';
import fontawesome from '@fortawesome/fontawesome';
import { faSkype, faGithub, faFacebook, faLinkedin } from '@fortawesome/fontawesome-free-brands';

const SCROLL_DELTA: number = 400;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title: string = 'Valentin Răduți';
  work$: Observable<Work[]>;
  education$: Observable<Education[]>;
  skillsBE$: Observable<Skill[]>;
  skillsFE$: Observable<Skill[]>;
  skillsDB$: Observable<Skill[]>;
  skillsSUP$: Observable<Skill[]>;
  freeTexts: FreeText[];
  navCollapsed: boolean = true;
  i18n: LangService;
  selectedAnchor: string;
  @ViewChild('aboutAnchor') aboutAnchor: ElementRef;
  @ViewChild('experienceAnchor') experienceAnchor: ElementRef;
  @ViewChild('educationAnchor') educationAnchor: ElementRef;
  @ViewChild('skillsAnchor') skillsAnchor: ElementRef;
  @ViewChild('interestsAnchor') interestsAnchor: ElementRef;

  constructor(private titleService: Title, private langSvc: LangService, private db: AngularFirestore) {
    fontawesome.library.add(faSkype, faFacebook, faGithub, faLinkedin);
    this.i18n = langSvc;
  }

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
    this.work$ = this.db.collection<Work>("work-experience", ref => ref.orderBy('date-start', "desc")).valueChanges();
    this.education$ = this.db.collection<Education>("education", ref => ref.orderBy('date-start', "desc")).valueChanges();
    this.skillsBE$ = this.db.collection<Skill>("skills", ref => ref.where("category", "==", "back-end").orderBy('skill', "desc")).valueChanges();
    this.skillsFE$ = this.db.collection<Skill>("skills", ref => ref.where("category", "==", "front-end").orderBy('skill', "desc")).valueChanges();
    this.skillsDB$ = this.db.collection<Skill>("skills", ref => ref.where("category", "==", "db").orderBy('skill', "desc")).valueChanges();
    this.skillsSUP$ = this.db.collection<Skill>("skills", ref => ref.where("category", "==", "support").orderBy('skill', "desc")).valueChanges();
    this.db.collection<FreeText>("free-texts").valueChanges().subscribe(re => this.freeTexts = re);
  }

  getFreeText(arg: string): string {
    return this.freeTexts.find(ft => ft.slug === arg).text[this.langSvc.lang];
  }

  @HostListener("window:scroll", [])
  onWindowScroll() {
    this.selectedAnchor = [this.aboutAnchor, this.experienceAnchor, this.educationAnchor, this.skillsAnchor, this.interestsAnchor].reverse()
      .find(a => a.nativeElement.offsetTop <= window.scrollY + SCROLL_DELTA).nativeElement.id;
  }

}
