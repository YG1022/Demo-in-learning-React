interface animal {
  quack: () => void
}

const duck: animal = {
  quack: () => console.log('quack'),
}
const chicken: animal = {
  quack: () => console.log('guk guk'),
}
const choir: animal[] = []

const joinChoir = (animal: animal): void => {
  choir.push(animal)
  console.log('join the choir')
  console.log('the member of the choir', choir.length)
}

joinChoir(duck)
// join the choir
// the member of the choir 1
joinChoir(chicken)
// join the choir
// the member of the choir 2
