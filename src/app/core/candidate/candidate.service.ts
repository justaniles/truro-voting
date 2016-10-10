import { Injectable } from "@angular/core";
import { AngularFire, FirebaseListObservable } from "angularfire2";
import { Observable, Subject } from "rxjs";

import { Candidate } from "./candidate.models";

@Injectable()
export class CandidateService {

    private firebaseCandidates: FirebaseListObservable<Candidate[]>;
    private loadedCandidates: Subject<Candidate[]>;

    constructor(private angularFire: AngularFire) {
        this.loadedCandidates = new Subject<Candidate[]>();
        this.firebaseCandidates = angularFire.database.list("/candidates");

        this.firebaseCandidates.subscribe((candidates: Candidate[]) => {
            this.loadedCandidates.next(candidates);
        });

        console.log("FirebaseCandidate service instantiated");
    }

    getCandidates(): Observable<Candidate[]> {
        return this.loadedCandidates.asObservable();
    }
}
