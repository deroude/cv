import { firestore } from 'firebase';

export class Education {
    id:string;
    institution: { [key: string]: string };
    'date-start': firestore.Timestamp;
    'date-end': firestore.Timestamp;
    comments: { [key: string]: string };
}