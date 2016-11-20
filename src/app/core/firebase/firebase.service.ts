import * as firebase from "firebase";
import { Injectable } from "@angular/core";
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from "angularfire2";
import { Observable, BehaviorSubject } from "rxjs";

import { AdminOptions, Candidate, VotingResults, VotingResult } from "./firebase.models";

@Injectable()
export class FirebaseService {

    private _adminOptions: BehaviorSubject<AdminOptions>;
    private firebaseAdmin: FirebaseObjectObservable<AdminOptions>;

    private _loadedCandidates: BehaviorSubject<Candidate[]>;
    private firebaseCandidates: FirebaseListObservable<Candidate[]>;

    private _votingResults: BehaviorSubject<VotingResults>;
    private firebaseVotingResults: FirebaseObjectObservable<VotingResults>;

    constructor(angularFire: AngularFire) {
        // Admin options
        this._adminOptions = new BehaviorSubject<AdminOptions>(null);
        this.firebaseAdmin = angularFire.database.object("/admin");
        this.firebaseAdmin.subscribe((adminOptions: AdminOptions) => {
            this._adminOptions.next(adminOptions);
        });

        // Candidates list
        this._loadedCandidates = new BehaviorSubject<Candidate[]>([]);
        this.firebaseCandidates = angularFire.database.list("/candidates");
        this.firebaseCandidates.subscribe((candidates: Candidate[]) => {
            this._loadedCandidates.next(candidates);
        });

        // Voting results
        this._votingResults = new BehaviorSubject({});
        this.firebaseVotingResults = angularFire.database.object("/results");
        this.firebaseVotingResults.subscribe((results: VotingResults) => {
            this._votingResults.next(results);
        });
    }

    public adminOptions(): Observable<AdminOptions> {
        return this._adminOptions.asObservable();
    }

    public candidates(): Observable<Candidate[]> {
        return this._loadedCandidates.asObservable();
    }

    public getCandidateVoteCount(candidate: Candidate): number {
        const candidateId = candidate.id;
        const votingResult = this._votingResults.getValue()[candidateId];

        if (!votingResult) {
            console.error(`No voting results found for candidate id '${candidateId}'.`);
            return -1;
        }

        return votingResult.votes;
    }

    public votingResults(): Observable<VotingResults> {
        return this._votingResults.asObservable();
    }

    public castVotes(candidates: Candidate[]): firebase.Promise<void> {
        const currentResults: VotingResults = this._votingResults.getValue();
        const incrementedResults: VotingResults = {};

        candidates.forEach((candidate) => {
            // First try to get this candidate's current vote count
            const candidateId = candidate.id;
            let currentVotingResult: VotingResult = currentResults[candidateId];
            if (!currentVotingResult) {
                console.warn(`No voting results found for candidate with id '${candidateId}.`
                    + `Adding new voting result.`);
                currentVotingResult = {
                    votes: 0
                };
            }

            // Now save the incremented count
            incrementedResults[candidateId] = {
                votes: currentVotingResult.votes + 1
            };
        });

        return this.firebaseVotingResults.update(incrementedResults);
    }
}
