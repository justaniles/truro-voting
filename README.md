# Overview
Voting application to be used by [Truro Anglican Church](http://truroanglican.com/).

# Database Structure
``` json
index: 0 <number>,
candidates: {
    0: {
        name: "Justin Niles" <string>,
        bio: "Short 1-2 sentence bio." <string>,
        photo: "first_last_id.jpeg" <string>
    },
    1: {
        ...
    },
    ...
},
results: {
    0: {
        votes: 1 <number>
    }
},
admin: {
    minVotes: 2 <number>,
    maxVotes: 5 <number>,
    pollsOpen: true <boolean>
}
```