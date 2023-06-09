export enum LoggingLevel {
    ERROR = "ERROR",
    INFO = "INFO",
    WARN = "WARN",
    DEBUG = "DEBUG",
    TRACE = "TRACE"
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
        console.log('target', target)
        console.log('propertyKey', propertyKey)
        console.log('descriptor', descriptor)

    }
}