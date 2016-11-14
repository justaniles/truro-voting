export interface Candidate {
    $key: string;
    id: string;
    name: string;
    bio?: string;
    imageUrl?: string;
}

export interface AdminOptions {
    minVotes: number;
    maxVotes: number;
    pollsOpen: boolean;
}
