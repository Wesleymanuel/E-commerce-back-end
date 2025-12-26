import  jwt  from "jsonwebtoken";
import { randomUUID } from "crypto";

const jwt_secret = String(process.env.JWT_SECRETS)

export class Jwt{

    constructor( private codeStatus : number ){
        this.codeStatus = codeStatus;
    }

    public sendToken() : string | undefined{
        if(this.codeStatus == 200) {
            const token = jwt.sign({id : randomUUID()}, jwt_secret, { expiresIn: '1d' })
            return  ( token ) 
        }

        return undefined
    }
}