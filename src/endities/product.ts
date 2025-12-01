export class ProductEndity{
    id? : string
    name : string
    price : number
    description : string

    constructor(props : { id?: string ,name : string, price : number, description : string }){

        this.name = props.name

        this.price = props.price

        this.description = props.description

        if(!props.name){
            throw new Error("name is invalid");
        }

        if(props.price <= 0){
            throw new Error("price is invalid");
        }

        if(!props.description){
            throw new Error("descripion is invalid");
        }
    }
}