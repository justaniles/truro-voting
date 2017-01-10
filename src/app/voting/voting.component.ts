import { Component, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";

import { CandidateCardComponent } from "./candidate-card/candidate-card.component";
import { ValidationModalComponent } from "./validation-modal/validation-modal.component";
import { AdminOptions, Candidate, FirebaseService } from "../core/firebase";
import { TitleBarService } from "../core/title-bar";

type VotingViews = "main" | "loading" | "pollsClosed";

@Component({
    selector: "tv-voting",
    templateUrl: "./voting.component.html",
    styleUrls: [ "./voting.component.scss" ]
})
export class VotingComponent implements OnInit {
    private actionBarMessage = "";
    private candidates: Observable<Candidate[]>;
    private currentView: VotingViews = "loading";
    private maxVotes: number;
    private minVotes: number;
    private pollsOpen = true;
    private selectedCandidates: CandidateCardComponent[] = [];

    @ViewChild(ValidationModalComponent)
    private validationModal: ValidationModalComponent;

    constructor(
        private firebaseService: FirebaseService,
        private router: Router,
        private titleBarService: TitleBarService
    ) {
        // Initialize list of candidates
        this.candidates = this.firebaseService.candidates();

        // Initialize minVotes, maxVotes, pollsOpen
        this.firebaseService.adminOptions().subscribe((adminOptions) => {
            if (adminOptions) {
                this.minVotes = adminOptions.minVotes;
                this.maxVotes = adminOptions.maxVotes;
                this.pollsOpen = adminOptions.pollsOpen;
            }

            this.updateActionBarMessage();
            this.updateCurrentView();
        });
    }

    public ngOnInit(): void {
        this.titleBarService.updateTitleBar(
            true,
            `Vestry Voting`,
            [
                {
                    name: "Quit",
                    onClick: this.gotoHome.bind(this)
                }
            ]
        );
    }

    /**
     * Toggles whether a candidate is selected
     *
     * @param candidateComponent The candidate component to toggle selected.
     */
    private toggleCandidateSelection(candidateComponent: CandidateCardComponent): void {
        const newSelectedState = !candidateComponent.selected;
        const atMaxVotes = this.selectedCandidates.length >= this.maxVotes;
        if (newSelectedState && atMaxVotes) {
            Materialize.toast(`You cannot select more than ${this.maxVotes} candidate(s) to vote for.`, 3000);
            return;
        }

        candidateComponent.selected = newSelectedState;

        const candidateIndex = this.selectedCandidates.indexOf(candidateComponent);
        if (newSelectedState && candidateIndex === -1) {
            this.selectedCandidates.push(candidateComponent);
        }
        else if (!newSelectedState && candidateIndex !== -1) {
            this.selectedCandidates.splice(candidateIndex, 1);
        }
    }

    /**
     * Performs verifications then casts votes via the firebaseService for the candidates
     * that the user has selected.
     */
    private actionCastVotes(): void {
        const candidates = this.selectedCandidates.map((candidate) => {
            return candidate.candidate;
        });
        this.validationModal.performValidation(candidates);
    }

    /**
     * Resets the selected candidates list so that all candidates show as unselected.
     */
    private actionResetCandidateSelections(): void {
        this.selectedCandidates.forEach((selectedCandidate) => {
            selectedCandidate.selected = false;
        });
        this.selectedCandidates.length = 0;
    }

    /**
     * Updates the message that is displayed on the action bar, based upon the
     * minVotes and maxVotes values.
     */
    private updateActionBarMessage(): void {
        let newMessage: string;
        if (this.minVotes === this.maxVotes) {
            newMessage = `Select ${this.minVotes} candidate(s)`;
        }
        else {
            newMessage = `Select between ${this.minVotes} and ${this.maxVotes} candidates`;
        }
        this.actionBarMessage = newMessage;
    }

    private updateCurrentView(): void {
        if (!this.minVotes || !this.maxVotes || !this.candidates) {
            this.currentView = "loading";
        }
        else if (!this.pollsOpen) {
            this.currentView = "pollsClosed";
        }
        else {
            this.currentView = "main";
        }
    }

    private gotoHome(): void {
        this.router.navigateByUrl("/");
    }
}
