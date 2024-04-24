class harsh {
    move(): void {
        console.log("Animal is moving");
    }
}

class vaishali extends harsh {
    bark(): void {
        console.log("Dog is barking");
    }
}

let vaishu = new vaishali();
vaishu.move();  // Output: Animal is moving
vaishu.bark();  // Output: Dog is barking