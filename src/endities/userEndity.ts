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

   if (!props.email.includes("@")) {
        throw new Error("invalid email format");
    }  

    const cpfRegex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
    if (!cpfRegex.test(props.cpf)) {
        throw new Error("invalid cpf format");
    }
    }
  
}