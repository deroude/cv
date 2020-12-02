export class Work {
    slug: string;
    employer: string;
    role: { [key: string]: string };
    'date-start': any;
    'date-end'?: any;
    projects: string[];
    activity?: { [key: string]: string };
}