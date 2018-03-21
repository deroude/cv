import { Pipe, PipeTransform } from "@angular/core";
import { LangService } from "./lang.service";

@Pipe({ name: "translate", pure: false })
export class TranslatePipe implements PipeTransform {

    constructor(private lang: LangService) { }

    transform(value: string,to:string): string {
        if(to) return this.lang.translate(value,to);
        return this.lang.translate(value);
    }
}