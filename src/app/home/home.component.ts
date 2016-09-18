import { Component, OnInit } from "@angular/core";
import { Candidate, CandidateService } from "../core/candidate";

@Component({
    selector: "home .container",
    templateUrl: "./home.component.html",
    styleUrls: [ "./home.component.scss" ]
})
export class HomeComponent implements OnInit {
    candidates: Candidate[] = [];

    constructor(private candidateService: CandidateService) {
    }

    ngOnInit() {
        this.candidates = this.candidateService.getCandidates();
    }

    incrementVote(candidate: Candidate): void {
        this.candidateService.incrementVoteCount(candidate.id);
    }
}
