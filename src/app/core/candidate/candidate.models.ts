export interface CandidateContract {
  id: string;
  name: string;
  voteCount?: number;
  imageUrl?: string;
  description?: string;
}

export class Candidate implements CandidateContract {
  id: string;
  name: string;
  voteCount = 0;
  imageUrl = "";
  description = "Default bio";

  constructor(candidateInfo: CandidateContract) {
    for (let prop in candidateInfo) {
      this[prop] = candidateInfo[prop];
    }
  }
}
