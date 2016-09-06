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
  imageUrl = "http://static.independent.co.uk/s3fs-public/thumbnails/image/2015/06/15/09/jon-snow.jpg";
  description = "Default bio";

  constructor(candidateInfo: CandidateContract) {
    for (let prop in candidateInfo) {
      this[prop] = candidateInfo[prop];
    }
  }
}
