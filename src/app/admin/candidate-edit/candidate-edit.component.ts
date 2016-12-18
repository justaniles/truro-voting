import { Component, ViewChild } from "@angular/core";

import * as CommonUtils from "../../core/utils/common.utils";
import { Candidate, FirebaseService } from "../../core/firebase";
import { ModalComponent } from "../../modal";

@Component({
    selector: "candidate-edit-modal",
    templateUrl: "candidate-edit.component.html",
    styleUrls: [ "candidate-edit.component.scss" ]
})
export class CandidateEditComponent {

    @ViewChild("candidateModal")
    private candidateModal: ModalComponent;
    private candidateToEdit: Candidate = {
        $key: "",
        id: "",
        name: "",
        bio: "",
        imageUrl: ""
    };
    private firebaseService: FirebaseService;

    constructor(firebaseService: FirebaseService) {
        this.firebaseService = firebaseService;
    }

    public dismiss(): void {
        this.candidateModal.dismiss();
    }

    public editCandidate(candidate: Candidate): void {
        this.candidateToEdit = CommonUtils.shallowCopy(candidate);
        this.candidateModal.show();
    }

    public updateCurrentCandidate(): void {
        this.firebaseService.updateCandidate(this.candidateToEdit)
            .then(() => {
                this.candidateModal.dismiss();
                Materialize.toast("Candidate successfully updated!", 3000);
            });
    }
}
