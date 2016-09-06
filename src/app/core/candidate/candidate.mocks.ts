import { Candidate } from "./candidate.models";

export const mockCandidates: Candidate[] = [
  new Candidate({
    id: "0",
    name: "John Snow",
    description: "Likes snow"
  }),
  new Candidate({
    id: "1",
    name: "Mike Tyson",
    description: "Big guy"
  }),
  new Candidate({
    id: "2",
    name: "The Rock",
    description: "Also pretty big dude"
  })
];
