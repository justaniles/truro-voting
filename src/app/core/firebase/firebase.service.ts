import { Injectable } from "@angular/core";
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from "angularfire2";
import { Observable, BehaviorSubject } from "rxjs";

import { AdminOptions, Candidate } from "./firebase.models";

@Injectable()
export class FirebaseService {

    private firebaseCandidates: FirebaseListObservable<Candidate[]>;
    private loadedCandidates: BehaviorSubject<Candidate[]>;

    private adminOptions: BehaviorSubject<AdminOptions>;
    private firebaseAdmin: FirebaseObjectObservable<AdminOptions>;

    constructor(angularFire: AngularFire) {
        this.loadedCandidates = new BehaviorSubject<Candidate[]>([]);
        this.firebaseCandidates = angularFire.database.list("/candidates");
        this.firebaseCandidates.subscribe((candidates: Candidate[]) => {
            this.loadedCandidates.next(candidates);
        });

        this.adminOptions = new BehaviorSubject<AdminOptions>(null);
        this.firebaseAdmin = angularFire.database.object("/admin");
        this.firebaseAdmin.subscribe((adminOptions: AdminOptions) => {
            this.adminOptions.next(adminOptions);
        });

        console.log("FirebaseCandidate service instantiated");
    }

    getAdminOptions(): Observable<AdminOptions> {
        return this.adminOptions.asObservable();
    }

    getCandidates(): Observable<Candidate[]> {
        return this.loadedCandidates.asObservable();
    }

    castVotes(candidates: Candidate[]): void {

    }
}
