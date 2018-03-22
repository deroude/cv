import { Project } from "./project";

export class Work {
    slug:string;
    employer: string;
    role: { [key: string]: string };
    'date-start': Date;
    'date-end'?: Date;
    projects: string[];
}