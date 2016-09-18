import { Candidate } from "./candidate.models";
import { mockCandidates } from "./candidate.mocks";
import { Injectable } from "@angular/core";

@Injectable()
export class CandidateService {

    loadedCandidates: Candidate[];

    constructor() {
        console.log("Candidate service instantiated");
        this.loadedCandidates = mockCandidates;
    }

    getCandidates(): Candidate[] {
        return this.loadedCandidates;
    }

    incrementVoteCount(candidateId: string): void {
        let foundCandidate: Candidate = null;
        this.loadedCandidates.some((candidate) => {
            if (candidate.id === candidateId) {
                foundCandidate = candidate;
                return true;
            }
            return false;
        });

        if (foundCandidate) {
            foundCandidate.voteCount += 1;
        }
    }
}
