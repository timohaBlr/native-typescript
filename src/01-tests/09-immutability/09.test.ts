import React from "react";
//data
type UserType = {
    name: string
    age: number
    address?: {
        city: string
    }
}
let address: any={};
const user:UserType = {
    name: 'Tima',
    age: 28,
}
beforeEach(() => {
  address = {
      city: 'Zhodino',
  }
})

test('clone', () => {
//data
    const cat:UserType = {
        name: 'Barsik',
        age: 1,
    }
    const neighbors = []
//action

    neighbors.push(user, cat)

    neighbors.map(n=>n.address= address)
//expect result
    expect(neighbors[0].address!.city).toBe('Zhodino');

})
