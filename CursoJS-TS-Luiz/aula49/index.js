//MAP

const persons = [
    { id: 3, name: 'Luiz'},
    { id: 2, name: 'Maria'},
    { id: 1, name: 'Helena'}
]

// const newPersons = {}

// for (const { id, name} of persons) {
//     const { id } = persons
//     newPersons[id] = { ...persons }
// }

const newPersons = new Map()
for (const person of persons) {
    const { id } = person
    newPersons.set(id, { ...person })
}

newPersons.delete(2)
for (const person of newPersons) {
    console.log(person)
}


