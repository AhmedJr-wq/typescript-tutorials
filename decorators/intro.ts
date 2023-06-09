//Decorators allow you to modify the behavior of classes, methods, properties, or parameters at design time. 
//They provide a way to annotate and modify the structure or functionality of code elements.
// Decorators are denoted by the @ symbol followed by an expression, which is evaluated at runtime.

import { LoggingLevel, Log } from "./methods"



class DbService {

    @Log(LoggingLevel.DEBUG)
    saveData(data: any) {
        console.log(`Saving data in the database...`)
    }
}

const db = new DbService()
db.saveData({Hello: 'World'})