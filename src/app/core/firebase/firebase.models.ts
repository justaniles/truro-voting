export interface Candidate {
    id: string;
    name: string;
    bio?: string;
    imageUrl?: string;

    // Metadata properties:
    $key?: string;
}

export interface AdminOptions {
    minVotes: number;
    maxVotes: number;
    pollsOpen: boolean;
}

export interface VotingResult {
    votes: number;
}

export interface VotingResults {
    [candidateId: string]: VotingResult;
}