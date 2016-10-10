import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";

import { Candidate, CandidateService } from "../core/candidate";

@Component({
    selector: "admin .container",
    templateUrl: "./admin.component.html",
    styleUrls: [ "./admin.component.scss" ]
})
export class AdminComponent implements OnInit {
    candidates: Observable<Candidate[]>;
    minVotes: number = 0;
    maxVotes: number = 10;
    pollsOpen: boolean = false;

    constructor(private candidateService: CandidateService) {
    }

    ngOnInit() {
        this.candidates = this.candidateService.getCandidates();
    }

    slideEvent(event) {
        console.log(event);
    }
}
