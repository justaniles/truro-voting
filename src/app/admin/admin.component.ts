import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";

import * as CommonUtils from "../core/utils/common.utils";
import { AdminOptions, Candidate, FirebaseService, VotingResults } from "../core/firebase";

@Component({
    selector: "admin",
    templateUrl: "./admin.component.html",
    styleUrls: [ "./admin.component.scss" ]
})
export class AdminComponent implements OnInit {
    public candidates: Observable<Candidate[]>;
    public formDirty = false;
    public votingResults: VotingResults;

    private _adminOptions: AdminOptions;
    private firebaseService: FirebaseService;

    constructor(firebaseService: FirebaseService) {
        this.firebaseService = firebaseService;
    }

    public get adminOptions(): AdminOptions {
        return this._adminOptions;
    }

    public set adminOptions(options: AdminOptions) {
        if (!options) {
            this._adminOptions = null;
            return;
        }
        this._adminOptions = CommonUtils.shallowCopy(options);
    }

    public ngOnInit(): void {
        // Subscribe to candidates updates
        this.candidates = this.firebaseService.candidates();

        // Subscribe to voting results updates
        this.firebaseService.votingResults().subscribe((results) => {
            this.votingResults = results;
        });

        // Subscribe to admin options updates
        this.firebaseService.adminOptions().subscribe((adminOptions) => {
            this.adminOptions = adminOptions;
        });
    }

    public dirtyForm(): void {
        this.formDirty = true;
    }

    public discardChanges(): void {
        this.adminOptions = this.firebaseService.adminOptions().getValue();
        this.formDirty = false;
    }

    public updateAdminOptions(): void {
        // TODO: need to perform final validation
        const adminOptions: AdminOptions = {
            minVotes: this.adminOptions.minVotes,
            maxVotes: this.adminOptions.maxVotes,
            pollsOpen: this.adminOptions.pollsOpen
        };
        this.firebaseService.updateAdminOptions(adminOptions)
            .then(() => {
                Materialize.toast("Admin options updated!", 3000);
                this.formDirty = false;
            })
            .catch((reason) => {
                console.error(reason);
                Materialize.toast("There was an error updating admin options.", 3000);
            });
    }

}
