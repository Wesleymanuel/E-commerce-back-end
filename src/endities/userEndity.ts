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
    }
}