export interface buyTypes {
    userName : string
    userEmail: string
    userCPF : string
    userCredityCard : string
    productTitle: string
    productPrice : number
    day : string
}

export class buyEndity{
    readonly userName : string
    readonly userEmail: string
    readonly userCPF : string
    readonly userCredityCard: string
    readonly productTitle: string
    readonly productPrice : number
    readonly day : string

    constructor( props: buyTypes){
    this.userName = props.userName,
    this.userEmail= props.userEmail
    this.userCPF = props.userCPF
    this.userCredityCard = props.userCredityCard
    this.productTitle= props.productTitle
    this.productPrice = props.productPrice
    this.day = props.day


    const cpfRegex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
    if (!cpfRegex.test(props.userCPF)) {
        throw new Error("invalid cpf format");
    }

    if(!props.userEmail.includes('@')){
        throw new Error('invalid email format')
    }
}
}