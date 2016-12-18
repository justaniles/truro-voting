import * as firebase from "firebase";
import { Inject, Injectable } from "@angular/core";
import { AngularFire, FirebaseApp, FirebaseListObservable, FirebaseObjectObservable } from "angularfire2";
import { BehaviorSubject } from "rxjs";

import * as CommonUtils from "../utils/common.utils";
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

    public adminOptions(): BehaviorSubject<AdminOptions> {
        return this._adminOptions;
    }

    public candidates(): BehaviorSubject<Candidate[]> {
        return this._loadedCandidates;
    }

    public votingResults(): BehaviorSubject<VotingResults> {
        return this._votingResults;
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

    public updateAdminOptions(newAdminOptions: AdminOptions): firebase.Promise<void> {
        // Perform basic validation
        if (!newAdminOptions) {
            throw "No admin options supplied to update. Cancelling update operation.";
        }
        else if (CommonUtils.isNullOrUndefined(newAdminOptions.pollsOpen)
            || CommonUtils.isNullOrUndefined(newAdminOptions.maxVotes)
            || CommonUtils.isNullOrUndefined(newAdminOptions.minVotes))
        {
            throw `Incomplete admin options provided to update (one or more of its properties `
             + `are null or undefined). { minVotes: ${newAdminOptions.minVotes}, maxVotes: ${newAdminOptions.maxVotes}, `
             + `pollsOpen: ${newAdminOptions.pollsOpen} }`;
        }

        // Validation passes, update firebase
        return this.firebaseAdmin.update(newAdminOptions);
    }

    public updateCandidate(candidate: Candidate): firebase.Promise<void> {
        // Ensure that the candidate parameter doesn't have any metadata on it
        candidate = {
            id: candidate.id,
            name: candidate.name,
            bio: candidate.bio,
            imageUrl: candidate.imageUrl
        };

        const candidates = this._loadedCandidates.getValue();

        // Ensure this candidate exists already
        const existingCandidate = candidates.find((c) => {
            return c.id === candidate.id;
        });
        if (!existingCandidate) {
            throw `Cannot update candidate with id '${candidate.id}', because it does not exist `
                + `on the server. Cancelling update operation.`;
        }

        // Perform the update
        const updateKey = existingCandidate.$key;
        return this.firebaseCandidates.update(updateKey, candidate);
    }
}
