import { Candidate, CandidateContract } from "./candidate.models";

export const mockCandidates: Candidate[] = [
  new Candidate({
    name: "John Snow",
    description: "Likes snow"
  }),
  new Candidate({
    name: "Mike Tyson",
    description: "Big guy"
  }),
  new Candidate({
    name: "The Rock",
    description: "Also pretty big dude"
  })
];
