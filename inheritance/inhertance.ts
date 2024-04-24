class Animal {
    move(): void {
        console.log("Animal is moving");
    }
}

class Dog extends Animal {
    bark(): void {
        console.log("Dog is barking");
    }
}

class Cat extends Animal {
    meow(): void {
        console.log("Cat is meowing");
    }
}

let dog = new Dog();
dog.move();  // Output: Animal is moving
dog.bark();  // Output: Dog is barking

let cat = new Cat();
cat.move();  // Output: Animal is moving
cat.meow();  // Output: Cat is meowing