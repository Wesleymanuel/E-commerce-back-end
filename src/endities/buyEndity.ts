export interface buyTypes {
    userName : string
    userEmail: string
    userId : string
    userCPF : string
    productID: string
    productTitle: string
    productPrice : number
    discount : number
    day : Date
}

export class buyEndity{
    readonly userName : string
    readonly userEmail: string
    readonly userId : string
    readonly userCPF : string
    readonly productID: string
    readonly productTitle: string
    readonly productPrice : number
    readonly discount : number
    readonly day : Date
    readonly finalValue : number

    constructor( props: buyTypes){
    this.userName = props.userName,
    this.userEmail= props.userEmail
    this.userId = props.userId
    this.userCPF = props.userCPF
    this.productID = props.productID
    this.productTitle= props.productTitle
    this.productPrice = props.productPrice
    this.discount = props.discount
    this.day = props.day
    this.finalValue = this.productPrice - this.discount

    const cpfRegex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
    if (!cpfRegex.test(props.userCPF)) {
        throw new Error("invalid cpf format");
    }

    if(!props.userEmail.includes('@')){
        throw new Error('invalid email format')
    }

    if (props.discount < 0) {
      throw new Error("Discount cannot be negative");
    }

    if (props.discount > props.productPrice) {
      throw new Error("Discount cannot be greater than product price");
    }

}
}