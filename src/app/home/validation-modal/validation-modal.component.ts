import * as firebase from "firebase";
import { Component, ViewChild } from "@angular/core";

import * as CommonUtils from "../../core/utils/common.utils";
import { AdminOptions, Candidate, FirebaseService } from "../../core/firebase";
import { ModalComponent } from "../../modal";

type ValidationState = "passed" | "failed" | "pending";

@Component({
    selector: "validation-modal",
    templateUrl: "./validation-modal.component.html",
    styleUrls: [ "./validation-modal.component.scss" ]
})
export class ValidationModalComponent {
    
    @ViewChild("modal")
    private modal: ModalComponent;
    private validationFailureReason: string;
    private validationState: ValidationState = "pending";
    private firebaseService: FirebaseService;
    private selectedCandidates: Candidate[];

    constructor(firebaseService: FirebaseService) {
        this.firebaseService = firebaseService;
    }

    public performValidation(selectedCandidates: Candidate[]): boolean {
        this.modal.show();

        const adminOptions: AdminOptions = this.firebaseService.adminOptions().getValue();
        const numberOfSelectedCandidates = selectedCandidates.length;

        if (numberOfSelectedCandidates < adminOptions.minVotes || numberOfSelectedCandidates > adminOptions.maxVotes) {
            let failureString = "Please select ";
            if (adminOptions.minVotes === adminOptions.maxVotes) {
                failureString += `exactly ${adminOptions.minVotes} candidate(s) `;
            } else {
                failureString += `between ${adminOptions.minVotes} and ${adminOptions.maxVotes} candidates.`
            }
            failureString += `\n\n(You selected ${numberOfSelectedCandidates})`;

            this.validationFailureReason = failureString;
            this.validationState = "failed";
            return false;
        }
        else if (!adminOptions.pollsOpen) {
            this.validationFailureReason = `We're sorry, but voting is unfortunately closed at this time.`;
            this.validationState = "failed";
            return false;
        }

        // Validation passes, present confirmation screen
        this.validationState = "passed";
        this.selectedCandidates = selectedCandidates;
        return true;
    }

    private castVotes(): void {
        // Perform validation one more time, then cast votes if validation passes
        const validationPasses = this.performValidation(this.selectedCandidates);
        if (validationPasses) {
            this.firebaseService.castVotes(this.selectedCandidates).then(() => {
                // TODO: goto vote cast screena
                Materialize.toast("Votes cast!", 3000);
            });
        }
    }

    private dismiss(): void {
        this.modal.dismiss();
    }
}
