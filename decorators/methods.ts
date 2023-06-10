export enum LoggingLevel {
    ERROR, 
    INFO,
    WARN, 
    DEBUG,
    TRACE
}

const appMaxLoggingLevel = LoggingLevel.DEBUG

export function Log(level: LoggingLevel): MethodDecorator {
    console.log(`Applying @Log decorator`)

    //decorator factory is used by the compiler to apply the decorator
    return (
        target: any,
        propertyKey: string | symbol,
        descriptor: PropertyDescriptor
    ) => {
        
        const originalMethod = descriptor.value

        descriptor.value = function(...args: any[]) {

            if(level <= appMaxLoggingLevel) {
                console.log(`>> Log: ${String(propertyKey)}, ${JSON.stringify(args)}`)
            }

           return originalMethod.apply(this, args)
        } //this value replaces the originalFunction with login capabilties
         
        return descriptor
    }
}