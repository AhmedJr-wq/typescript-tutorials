enum OrderStatus {
    Pending,
    Shipped,
    Delivered,
    Cancelled,
  }

let book = {
    name: "JavaScript",
    description: "JavaScript is a programming language that conforms to the ECMAScript specification.",
    type: OrderStatus.Delivered
}

console.log(book)