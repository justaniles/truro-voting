import { Component, OnInit } from "@angular/core";
import { Candidate, CandidateService } from "../core/candidate";

@Component({
  selector: "admin .container",
  templateUrl: "./admin.component.html",
  styleUrls: [ "./admin.component.scss" ]
})
export class AdminComponent implements OnInit {
  candidates: Candidate[] = [];

  constructor(private candidateService: CandidateService) {
  }

  ngOnInit() {
    this.candidates = this.candidateService.getCandidates();
  }

  incrementVote(candidate: Candidate): void {
    this.candidateService.incrementVoteCount(candidate.id);
  }

  decrementVote(candidate: Candidate): void {

  }
}
