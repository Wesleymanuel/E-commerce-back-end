interface UserSetings {
    id?: string
    firstName: string
    secondName: string
    bornDate : Date
    adress : string
    email : string
    password: string
    cpf: string 
    rg: string 
    phoneNumber: string
    banckAccont: string 
    banckAgency: string
    credityCard: string
    cvc: string
    validDate: string
}


export class UserEndity{
    id?: string 
    firstName: string
    secondName: string
    bornDate : Date
    adress : string
    email : string
    password: string
    cpf: string 
    rg: string 
    phoneNumber: string
    banckAccont: string 
    banckAgency: string
    credityCard: string
    cvc: string
    validDate: string

    constructor(props : Omit<UserSetings,'id'> , id ?: string ) {
        this.id = id
        this.firstName = props.firstName
        this.secondName = props.secondName
        this.bornDate = props.bornDate
        this.adress = props.adress
        this.email = props.email
        this.password = props.password
        this.cpf = props.cpf
        this.rg = props.rg
        this.phoneNumber = props.phoneNumber
        this.banckAccont = props.banckAccont
        this.banckAgency = props.banckAgency
        this.credityCard = props.credityCard
        this.cvc = props.cvc
        this.validDate = props.validDate

    if(!props.firstName || !props.secondName){
        throw  Error("names are invalids")
    }

   if (!props.email.includes("@")) {
        throw new Error("invalid email format");
    }  

    const cpfRegex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
    if (!cpfRegex.test(props.cpf)) {
        throw new Error("invalid cpf format");
    }
    }
  
}