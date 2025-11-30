export class UserEndity{
    id?: string
    nome : string
    sobrenome : string
    email : string
    password : string
    cpf : string

    constructor(props : {id ?: string ,nome : string, sobrenome : string, email : string, password : string, cpf : string }) {
        this.id = props.id
        this.nome = props.nome
        this.sobrenome =props.sobrenome
        this.email = props.email
        this.password = props.password
        this.cpf = props.cpf

    if(!props.nome || !props.sobrenome){
        throw  Error("names are invalids")
    }

    if(!props.email.includes("@gmail.com")){
        throw new Error("email aren't in correct format")
    }
    if(!props.cpf.includes("000.000.000-00")){
        throw new Error("email aren't in correct format")
    }
    }
  
}