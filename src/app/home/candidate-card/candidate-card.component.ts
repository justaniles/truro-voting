import { Component,  Input, Output, EventEmitter, HostListener } from "@angular/core";

import { Candidate } from "../../core/candidate/candidate.models";

@Component({
    selector: "candidate-card",
    templateUrl: "./candidate-card.component.html",
    styleUrls: [ "./candidate-card.component.scss" ]
})
export class CandidateCardComponent {
    @Input() candidate: Candidate;
    @Output() select = new EventEmitter<boolean>();
    selected = false;

    @HostListener("click")
    toggleSelected() {
        this.selected = !this.selected;
        this.select.emit(this.selected);
    }
}
