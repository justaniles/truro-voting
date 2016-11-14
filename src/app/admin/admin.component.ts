import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";

import { Candidate, FirebaseService } from "../core/firebase";

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

    constructor(private candidateService: FirebaseService) {
    }

    ngOnInit() {
        this.candidates = this.candidateService.getCandidates();
    }

    slideEvent(event) {
        console.log(event);
    }
}
