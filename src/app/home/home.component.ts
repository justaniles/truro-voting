import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";

import { CandidateCardComponent } from "./candidate-card/candidate-card.component";
import { Candidate, FirebaseService } from "../core/firebase";

@Component({
    selector: "home",
    templateUrl: "./home.component.html",
    styleUrls: [ "./home.component.scss" ]
})
export class HomeComponent implements OnInit {
    public candidates: Observable<Candidate[]>;
    private firebaseService: FirebaseService;
    private selectedCandidates: CandidateCardComponent[] = [];

    constructor(candidateService: FirebaseService) {
        this.firebaseService = candidateService;
    }

    public ngOnInit() {
        this.candidates = this.firebaseService.getCandidates();
    }

    public toggleCandidateSelection(candidateComponent: CandidateCardComponent): void {
        const newSelectionState = !candidateComponent.selected;
        candidateComponent.selected = newSelectionState;

        const candidateIndex = this.selectedCandidates.indexOf(candidateComponent);
        if (newSelectionState && candidateIndex === -1) {
            this.selectedCandidates.push(candidateComponent);
        }
        else if (!newSelectionState && candidateIndex !== -1) {
            this.selectedCandidates.splice(candidateIndex, 1);
        }
    }

    public actionCastVotes(): void {

    }

    public actionResetCandidateSelections(): void {
        this.selectedCandidates.forEach((selectedCandidate) => {
            selectedCandidate.selected = false;
        });
        this.selectedCandidates.length = 0;
    }
}
