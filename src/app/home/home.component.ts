import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";

import { CandidateCardComponent } from "./candidate-card/candidate-card.component";
import { AdminOptions, Candidate, FirebaseService } from "../core/firebase";

export enum HomeViews {
    Loading,
    PollsClosed,
    Main
};

@Component({
    selector: "home",
    templateUrl: "./home.component.html",
    styleUrls: [ "./home.component.scss" ]
})
export class HomeComponent implements OnInit {
    public HomeViews = HomeViews;
    public candidates: Observable<Candidate[]>;
    public currentView: HomeViews = HomeViews.Loading;
    public minVotes: number;
    public maxVotes: number;
    public pollsOpen = true;
    public actionBarMessage = "";
    private firebaseService: FirebaseService;
    private selectedCandidates: CandidateCardComponent[] = [];

    constructor(candidateService: FirebaseService) {
        this.firebaseService = candidateService;
    }

    /**
     * Initialize the subscriptions to the firebase observables that drive the candidates
     * and admin options used for this voting screen.
     */
    public ngOnInit(): void {
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

    /**
     * Toggles whether a candidate is selected
     *
     * @param candidateComponent The candidate component to toggle selected.
     */
    public toggleCandidateSelection(candidateComponent: CandidateCardComponent): void {
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
    public actionCastVotes(): void {
        const candidates = this.selectedCandidates.map((candidate) => {
            return candidate.candidate;
        });
        this.firebaseService.castVotes(candidates);
        this.actionResetCandidateSelections();
    }

    /**
     * Resets the selected candidates list so that all candidates show as unselected.
     */
    public actionResetCandidateSelections(): void {
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
            this.currentView = HomeViews.Loading;
        }
        else if (!this.pollsOpen) {
            this.currentView = HomeViews.PollsClosed;
        }
        else {
            this.currentView = HomeViews.Main;
        }
    }
}
