interface Animal {
  quack: () => void
}

const makeSound = (animal: Animal): void => {
  if (animal instanceof Duck) {
    console.log('Quack')
  } else if (animal instanceof Chicken) {
    console.log('Cluck')
  }
}

class Duck implements Animal {
  quack() {
    console.log('Quack')
  }
}

class Chicken implements Animal {
  quack() {
    console.log('Cluck')
  }
}

makeSound(new Duck()) // Quack
makeSound(new Chicken()) // Cluck