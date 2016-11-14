import { Component,  Input, Output, EventEmitter, HostListener } from "@angular/core";

import { Candidate } from "../../core/firebase/candidate.models";

@Component({
    selector: "candidate-card",
    templateUrl: "./candidate-card.component.html",
    styleUrls: [ "./candidate-card.component.scss" ]
})
export class CandidateCardComponent {
    @Input()
    public candidate: Candidate;

    public selected = false;
}
