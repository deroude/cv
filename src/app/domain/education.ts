export class Education {
    id:string;
    institution: { [key: string]: string };
    'date-start': Date;
    'date-end': Date;
    comments: { [key: string]: string };
}