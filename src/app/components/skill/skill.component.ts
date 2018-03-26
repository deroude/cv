import { Component, OnInit, Input } from '@angular/core';
import { Skill } from '../../domain/skill';
import fontawesome from '@fortawesome/fontawesome';
import {faGit,faNodeJs,faAngular,faSass,faCss3,faHtml5,faDocker,faJenkins} from '@fortawesome/fontawesome-free-brands';
import {faStar} from '@fortawesome/fontawesome-free-solid';

@Component({
  selector: 'skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent implements OnInit {

  @Input()
  skill: Skill;

  constructor() { 
    fontawesome.library.add(faGit,faNodeJs,faAngular,faSass,faCss3,faHtml5,faDocker,faStar,faJenkins);
  }

  ngOnInit() {
  }

}
