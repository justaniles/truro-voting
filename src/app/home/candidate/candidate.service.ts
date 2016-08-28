import { Candidate } from "./candidate.models";
import { mockCandidates } from "./candidate.mocks";
import { Injectable } from "@angular/core";

@Injectable()
export class CandidateService {

  getCandidates(): Candidate[] {
    return mockCandidates;
  }
}
