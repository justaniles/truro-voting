import { Candidate } from "./candidate.models";

export const mockCandidates: Candidate[] = [
    new Candidate({
        id: "0",
        name: "John Snow",
        description: "Likes snow"
    }),
    new Candidate({
        id: "1",
        name: "Mike Tyson",
        description: "Big guy",
        imageUrl: "https://s-media-cache-ak0.pinimg.com/564x/ae/d4/d2/aed4d2966303431ea7706b90dd4f0293.jpg"
    }),
    new Candidate({
        id: "2",
        name: "The Rock",
        description: "Also pretty big dude",
        imageUrl: "http://vignette4.wikia.nocookie.net/gameofthrones/images/5/56/Jon_Kill_the_Boy.jpg/revision/latest?cb=20150508120833"
    }),
    new Candidate({
        id: "3",
        name: "John Snow",
        description: "Likes snow",
        imageUrl: "http://img.huffingtonpost.com/asset/scalefit_630_noupscale/56e024e81500002a000b1742.jpeg?cache=jzkjufoi3w"
    }),
    new Candidate({
        id: "4",
        name: "Mike Tyson",
        description: "Big guy"
    }),
    new Candidate({
        id: "5",
        name: "The Rock",
        description: "Also pretty big dude"
    })
];
