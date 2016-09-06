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

  incrementVoteCount(candidate: Candidate): void {
    candidate.voteCount += 1;
  }
}
