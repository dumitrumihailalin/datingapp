import { Photo } from "./photo";

export interface  Member {
    id: number;
    userName: string;
    dateOfBirth: Date,
    introduction: string;
    photoUrl: string;
    agen: number;
    knownAs: string;
    created: Date,
    gender: string;
    city: string;
    photos: Photo[];
}