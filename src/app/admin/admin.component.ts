import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";

import { Candidate, FirebaseService, VotingResults } from "../core/firebase";

@Component({
    selector: "admin .container",
    templateUrl: "./admin.component.html",
    styleUrls: [ "./admin.component.scss" ]
})
export class AdminComponent implements OnInit {
    public candidates: Observable<Candidate[]>;
    public minVotes: number = 0;
    public maxVotes: number = 10;
    public pollsOpen: boolean = false;
    public votingResults: VotingResults;

    private firebaseService: FirebaseService;

    constructor(firebaseService: FirebaseService) {
        this.firebaseService = firebaseService;
    }

    public ngOnInit(): void {
        this.candidates = this.firebaseService.candidates();

        // Whenever voting results change update the local voting results variable
        this.firebaseService.votingResults().subscribe((results) => {
            this.votingResults = results;
        });
    }
}
