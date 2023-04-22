class Car {
    constructor (brand, year) {
        this.brand = brand;
        this.year = year;
    }

    getAge () {
        const currentYear = new Date().getFullYear();
        return currentYear - this.year;
    }

    print () {
        console.log(`This ${this.brand} is ${this.getAge()} years old`)
    }
}

const Audi = new Car('Audi', '2012')
const BMW = new Car('BMW', '2012')
const Benz = new Car('Benz', '2012')

Audi.print()
BMW.print()
Benz.print()