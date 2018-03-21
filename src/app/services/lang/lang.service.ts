import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable()
export class LangService {

  constructor() { }

  _lang: string = "en-GB";


  get lang() { return this._lang }
  set lang(lang: string) { this._lang = lang; }

  get available(): string[] { return environment.dictionary.available }

  translate(literal: string, lang?: string): string {
    return environment.dictionary[lang || this._lang][literal] || literal;
  }

}
