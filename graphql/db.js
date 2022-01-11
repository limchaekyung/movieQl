export const people = [
    {
        id: "0",
        name: "chae",
        age: 18,
        gender: "female"
    },
    {
        id: "1",
        name: "Japan Guy",
        age: 18,
        gender: "male"
    },
    {
        id: "2",
        name: "JD",
        age: 18,
        gender: "male"
    },
    {
        id: "3",
        name: "moondaddi",
        age: 18,
        gender: "female"
    },
    {
        id: "4",
        name: "flynn",
        age: 18,
        gender: "female"
    },
    {
        id: "5",
        name: "carrie",
        age: 18,
        gender: "female"
    },
    {
        id: "6",
        name: "hyun",
        age: 18,
        gender: "male"
    },
    {
        id: "7",
        name: "lan",
        age: 18,
        gender: "female"
    }
];

export const getById = id => {
    const filteredPeople = people.filter(person => id === people.id);
    return filteredPeople[0];
}