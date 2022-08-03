
// let kendaraan = ['mobil', 'motor', 'bis', 'pesawat']
// kedaraan[0] = 'jet'

// console.log(kendaraan);
// console.log(kendaraan.length); //Output: 4


let number = [1,52,33,24,50,16]
console.log(number)
console.log(number.sort())

let person = {
    name : "Vadia",
    age : 15,
    hobby: "reading"
};

delete person.hobby
console.log(person);

// person.age = 25
// person.address = "KSB"

// console.log(person.hobby);

// console.log(person['name'])

//array of object

let students =[
    {
        name: "vadia",
        age : 14,
    },
    {
        name: "aisyah",
        age : 15,
    },
    {
        name: "alma",
        age : 16,
    },
    {
        name: "meisya",
        age : 12,
    }
];


// rekursive

// function rekursive(){
//     if(condition){
//         //stop calling it self
//         // untuk memberikan kondisi perulangan nya sampai mana
//     } else {
//         rekursive();
//     }
// }

//contoh

function countDown(number){
    console.log(number);

    let nextNumber = number -1;

    if(nextNumber > 0) {
        countDown(nextNumber);
    }
}
countDown(10);


//regex

let regex1 = new RegExp("Meisya")
console.log(regex1.test("Meisya"))

// COntoh OOP

function Person(name, age) {
    this.name = name;
    this.age = age;

    this.greeting= function(){
        return `Hello Nama Saya ${this.name} umur saya ${this.age}`
    }
}
let person1 = new Person("Meisya Aminah Zalfa", 10)
console.log(person1)

