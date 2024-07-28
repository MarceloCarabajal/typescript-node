
export const printObject = ( argument: any) => {
    console.log(argument);
}

export function genericFunction<T>( args: T ): T {
    return args;
}

export const genericFunctionArrow = <T>(argument: T) => {
    return argument
}