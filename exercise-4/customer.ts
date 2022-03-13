
export class Customer{
    private firstName!: string;
    private lastName!: string;
    private Age!: Number


    constructor(firstName:string , lastName:string, Age: Number){
        this.firstName = firstName;
        this.lastName = lastName;
        this.Age = Age
    }

    public greeter(){
        console.log(`Hello ${this.firstName} ${this.lastName}`)
    }

    public getAge(){
        console.log(`${this.firstName}'s Age is ${this.Age}`)
    }
}
let customer = new Customer("Jeffrey","Mcilveen", 28)
customer.greeter();

customer.getAge()