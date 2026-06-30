export class ApiError extends Error {

    constructor(
        public readonly statusCode: number,
        message: string,
        public readonly stack?:string
    ) {
        super(message);

        if(stack){
            this.stack=stack;
        }
    }


}

//Why did you extend Error instead of creating your own class?
//->"Because JavaScript's built-in Error class already provides standard
//  error behavior like the message, stack trace, and integration with the runtime. 
//  By extending it, we can add application-specific information such as an HTTP status 
//  code while preserving all the built-in debugging features."