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

    //decorator factory is used by the compiler in order to apply the decorator
    return (
        // target: any,
        // propertyKey: string,
        // descriptor: PropertyDescriptor
    ) => {}
}