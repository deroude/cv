import { Component, OnInit, Input } from '@angular/core';
import { Skill } from '../../domain/skill';

@Component({
  selector: 'skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent implements OnInit {

  @Input()
  skill: Skill;

  constructor() { }

  ngOnInit() {
  }

}
