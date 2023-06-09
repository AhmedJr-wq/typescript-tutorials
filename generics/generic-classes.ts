//Generic classes allow you to create classes that can work with different types.

class Container<K, V> {

    constructor(
        readonly key: K,
        readonly value: V
    ) {
    }

    print() {
        console.log(`Key: ${this.key} Value: ${this.value}`)
    }
}

const val1 = new Container('Hello', 2)
const p1 = val1.key

val1.print()