class Person {
    constructor ( name, id, password, cuentas ) {
        this.name = name;
        this.id = id;
        this.password = password;
        this.cuentas = cuentas;
    }

    setName (value){

        this.name = value
    }
    

    setId (value){

        this.id = value
    }
    setPassword (value){

        this.password = value
    }
    
    setCuentas (value) {
        this.cuentas = value
    }

    getName () {
        return this.name;       
    }
    getId () {
        return this.id;       
    }
    getPassword () {
        return this.password;       
    }
    getcuentas () {
        // for(let index=0;index<this.cuentas.length;index++){
        //     console.log(this.cuentas[index]);
        // }
        return this.cuentas;
    }
}

class Account {

    constructor ( number, balance,  currency, id,  ) {
    this.number = number;
    this.balance = balance;
    this.currency = currency;
    this.id = id;

    }

    setNumber (value){

        this.number = value
    }
    

    setBalance (value){
      this.balance = value
        
    }
    setCurrency (value){

        this.currency = value
    }
    setId (value){

        this.id = value
    }
    getNumber () {
        return this.number;       
    }
    getBalance () {
            return this.balance;       
    }
    getCurrency () {
        return this.currency;       
    }
    getId () {
        return this.id;       
    }
}

class Transaction {

    constructor (id, amount, destinyAccount, sourceAccount, type ) {
    this.id = id;
    this.amount = amount
    this.destinyAccount = destinyAccount ;
    this.sourceAccount = sourceAccount ;
    this.type = type;

    }

    setId (value){

        this.id = value
    }
    setAmount (value){

        this.amount = value
    }
    setDestinyAccount (value){

        this.destinyAccount = value
    }
    setSourceAccount (value){

        this.sourceAccount = value
    }
    setType (value){

        this.type = value
    }
    getId () {
        return this.id;       
    }
    getAmount () {
        return this.amount;       
    }
    getDestinyAccount () {
        return this.destinyAccount;       
    }
    getSourceAccount () {
        return this.sourceAccount;       
    }
    getType () {
        return this.type;       
    }
}
/*

while ( balance === true) {
    balance = cuentas.getBalance()
    if (balance>=10 && balance<=990) {
        buscarCuenta = true


        
    }

    
}
*/



function buscarCuenta (idAccount, personAccount){
    for( let index = 0; index < personAccount.length ; index++){
        let value = personAccount[index].getNumber();
        if( personAccount[index].getNumber()== idAccount){
            return personAccount [index]
        }
    }
}

function newBalance (idAccount, personAccount) {
    let account = buscarCuenta(idAccount, personAccount);
    let actualBalance = account.getBalance();
    console.log (actualBalance);

 }

function deposit (idAccount, amount, personAccount) {
    let account = buscarCuenta(idAccount, personAccount);
    let actualBalance = account.getBalance();
    let futureBalance = actualBalance + amount;
    if (futureBalance <= 990) {
        account.setBalance (futureBalance)
    }else {
        console.log ("Supera los limites establecidos")
    }

        
   

        
    }
    

    

        

/*
function limit (idAccount, amount, personAccount) {
    let account = buscarCuenta(idAccount, personAccount);
    let actualBalance = account.getBalance ();
    let futureBalance = actualBalance + amount ;
if (futurebalance <=990 && futurebalance>=10) {
    
} else {
    console.log ("Supera los limites establecidos")
}

}
*/
function withdrawal (idAccount, amount, personAccount) {
    let account = buscarCuenta(idAccount, personAccount);
    let actualBalance = account.getBalance();
    if ( amount <= actualBalance) {
        let futureBalance = actualBalance - amount ;
    
        if (futureBalance >= 10) {
            account.setBalance (futureBalance);
        } else {
            console.log ("No puedes dejar un saldo menor a $10");
        }

    } 
    else {
        console.log ("Fondos Insuficientes")
        console.log ("Saldo de la cuenta: " + account.getBalance ())
     }
     

     

    
   
}

let Ahiram1 = new Account("200-02-020-25094-3", 150, "USD", 120895);
let Ahiram2 = new Account("200-01-020-67489-9", 100, "USD", 120895);
let Carlos1 = new Account("200-02-020-09758-2", 650, "USD", 120967);
let Carlos2 = new Account("200-01-020-54789-8", 120, "USD", 120967);
let Fabian1 = new Account("200-02-020-65784-4", 2000, "USD", 1161406);
let Fabian2 = new Account("200-01-020-46785-3", 50, "USD", 1161406);

let cuentasFabian = [Fabian1, Fabian2];
let cuentasAhiram = [Ahiram1, Ahiram2];
let cuentasCarlos = [Carlos1, Carlos2];

let Client1 = new Person ("Ahiram", 120895, "Fgj1204", cuentasAhiram);
let Client2 = new Person ("Carlos", 120967, "klt345", cuentasCarlos);
let Client3 = new Person ("Fabian", 11161406, "fhju678", cuentasFabian);

//Login

login ("ahiram@gmail.com","123")

// Make a deposit

console.log("Saldo antes del deposito: "+Client1.getcuentas()[0].getBalance());
console.log("Depositando 960");
console.log("Depositando ... ")
deposit ("200-02-020-25094-3",960,cuentasAhiram);
console.log("Saldo despues del deposito: "+ Client1.getcuentas()[0].getBalance());



//Saldos de cuenta

console.log ("Su saldo actual es:")
newBalance ("200-02-020-25094-3",cuentasAhiram);




//Make a withdrawal of money

console.log("Saldo antes del retiro: "+Client1.getcuentas()[0].getBalance());
console.log("Retirando 645");
console.log("Retiro en proceso ... ")
withdrawal ("200-02-020-25094-3",645,cuentasAhiram);
console.log("Saldo despues del retiro: "+Client1.getcuentas()[0].getBalance());


