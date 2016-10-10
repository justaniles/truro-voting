import { Component, OnInit } from "@angular/core";
import { AngularFire, FirebaseListObservable } from "angularfire2";
import { Candidate, CandidateService } from "../core/candidate";

@Component({
    selector: "home .container",
    templateUrl: "./home.component.html",
    styleUrls: [ "./home.component.scss" ]
})
export class HomeComponent implements OnInit {
    candidates: FirebaseListObservable<Candidate[]>;

    constructor(private candidateService: CandidateService, private angularFire: AngularFire) {
    }

    ngOnInit() {
        this.candidates = this.angularFire.database.list("/candidates");
    }

    incrementVote(candidate: Candidate): void {
        this.candidateService.incrementVoteCount(candidate.id);
    }
}
