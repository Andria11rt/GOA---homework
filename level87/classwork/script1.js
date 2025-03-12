function person(name, lastName, phoneNumber, email, password, confrimPassword) {
    this.name = name
    this.lastName = lastName
    this.phoneNumber = phoneNumber
    this.email = email
    this.password = password
    this.confrimPassword = confrimPassword
    this.persInfo = function(){
        return `my name is ${this.name}, my lastname is ${this.lastName} my phone number is ${this.phoneNumber},
        my email is ${this.email} my email password is ${this.password} an confrim password ${this.confrimPassword}`
    }
}

let pers = new person("Andria","Nachkebia", 56892463, "babububa55@gmail.com","akatoros","akatoros")

console.log(pers.persInfo())

let pers1 = new person("Nika","Gelashvili", 54638253, "Nikakik34@gmail.com","Nikushka","Nikushka")

console.log(pers1.persInfo())

let pers2 = new person("Luka", "Davitaze", 546283527, "Lukitoluka@gmail.com", "Lukashka","Lukashka")

console.log(pers2.persInfo())