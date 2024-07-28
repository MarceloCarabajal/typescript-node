function printToConsole( constructor: Function ){
    console.log( constructor ); 
}

const printToConsoleConditional = (print: boolean = false): Function => {
    if(print){
        return printToConsole;
    } else {
        return () => {}
    }
}

const bloquearPrototipo = function( constructor:Function ){
    Object.seal( constructor )
    Object.seal( constructor.prototype )
}

function checkValidPokemonid(){
    return function( target: any, porpertyKey: string, descriptor: PropertyDescriptor ){
        
        const originalMethod = descriptor.value;
        descriptor.value = ( id: number) => {
            if (id < 1 || id > 800 ){
                return console.error('El id debe estar entre 1 y 800');
            } else {
                return originalMethod(id)
            }
        }
        // descriptor.value = () => {
        //     console.log('Hola, me estoy ejecutando');    
        // }
    }
}

function readOnly( isWritable: boolean = true): Function {
    return function(target: any, propertyKey: string){
        const descriptor: PropertyDescriptor = {
            get(){
                console.log(this, 'getter');
                return 'Marcelo'
            },
            set(this, val){
                // console.log(this, val);
                Object.defineProperty(this, propertyKey, {
                    value: val,
                    writable: !isWritable,
                    enumerable: false
                })
            }
        }
        return descriptor;        
    }

    
}

@bloquearPrototipo
@printToConsoleConditional( false )
export class Pokemon {
    @readOnly(true)
    public publicApi: string = 'https://pokeapi.co'

    constructor(
        public name: string,
    ) {}

    @checkValidPokemonid()
    savePokemonToDB( id: number ){
        console.log(`Pokemon saved to database ${ id }`);
    }
}