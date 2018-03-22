import { Component, OnInit, Input } from '@angular/core';
import { LangService } from '../../services/lang/lang.service';
import { Education } from '../../domain/education';

@Component({
  selector: 'education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {

  i18n: LangService;

  @Input()
  education: Education;

  constructor(private langSvc: LangService) {
    this.i18n = langSvc;
  }

  ngOnInit() {
  }

}
