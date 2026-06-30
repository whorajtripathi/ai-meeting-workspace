// To provide the responses to the frontend in the below format only

export class ApiResponse<T>{

    public success:boolean;

    constructor(
        public statusCode:number,
        public message:string,
        public data:T       
    ){
        this.success=statusCode>=200 && statusCode<300;
    }
}

