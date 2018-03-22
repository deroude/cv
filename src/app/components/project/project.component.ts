import { Component, OnInit, Input } from '@angular/core';
import { LangService } from '../../services/lang/lang.service';
import { Project } from '../../domain/project';

@Component({
  selector: 'project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  i18n: LangService;

  @Input()
  project: Project;

  constructor(private langSvc: LangService) {
    this.i18n = langSvc;
  }

  ngOnInit() {
  }

}
