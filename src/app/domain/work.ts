import { Project } from "./project";

export class Work {
    id:string;
    employer: string;
    role: { [key: string]: string };
    'date-start': Date;
    'date-end'?: Date;
    projects: string[];
    projectObjs?:Project[];
}