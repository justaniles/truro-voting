import { Component, OnInit } from "@angular/core";
import { Candidate, CandidateService } from "./candidate";

@Component({
  selector: "home",
  templateUrl: "home.component.html",
  styleUrls: ["home.component.scss"]
})
export class HomeComponent implements OnInit {
  candidates: Candidate[] = [];

  constructor(private candidateService: CandidateService) {}

  ngOnInit() {
    this.candidates = this.candidateService.getCandidates();
  }
}
