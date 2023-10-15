export interface SignUp{
    name: string,
    password1: string,
    password2: string,
    email:string
}


export interface login{
    email: string,
    password1: string
}

export interface product{
    name:string,
    price:number,
    category:string,
    color:string,
    description:string,
    image:string,
    id:number,
    quantity:undefined|number
}

export interface cart{
    name:string,
    price:number,
    category:string,
    color:string,
    description:string,
    image:string,
    id:number| undefined,
    quantity:undefined|number,
    userId:number,
    productId:number
}
