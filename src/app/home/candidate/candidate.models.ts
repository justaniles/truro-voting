export interface CandidateContract {
  name: string;
  imageUrl?: string;
  description?: string;
}

export class Candidate implements CandidateContract {
  name: string;
  imageUrl = "";
  description = "Default bio";

  constructor(candidateInfo: CandidateContract) {
    for (let prop in candidateInfo) {
      this[prop] = candidateInfo[prop];
    }
  }
}
