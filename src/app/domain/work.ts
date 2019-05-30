import { firestore } from 'firebase';

export class Work {
    slug: string;
    employer: string;
    role: { [key: string]: string };
    'date-start': firestore.Timestamp;
    'date-end'?: firestore.Timestamp;
    projects: string[];
    activity?:{ [key: string]: string };
}