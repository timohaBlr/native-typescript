import {sum} from "./01";
import {
    makeHairStyle,
    moveUser,
    moveUserWithLaptop, removeBook, traveler, updateBooks, updateCompany, updateCompany2, updateTravelRoute,
    upgradeUserLaptop,
    user,
    userWithBooks, userWithLaptopAndCompany,
    UserWithLaptopType
} from "./10-01";
//data
let userWithLaptop: UserWithLaptopType;
beforeEach(() => {
    const laptop = {model: 'ZenBook'};
    userWithLaptop = {...user, laptop: laptop}

})
test('hairdresser should work correct', () => {
    //action
    const awesomeUser = makeHairStyle(user, 2)
    //expect
    expect(awesomeUser.hairLength).toBe(16)
    expect(awesomeUser.address).toBe(user.address)
})
test('hairLength still after relocate', () => {
    //action
    const awesomeUser = moveUser(user, 'Kiev')
    //expect
    expect(awesomeUser.address.city).toBe('Kiev')
    expect(user.address.city).toBe('Minsk')
    expect(awesomeUser.hairLength).toBe(user.hairLength)
    expect(awesomeUser).not.toBe(user)
})

test('new user will have old laptop', () => {
    //action
    const movedUser = moveUserWithLaptop(userWithLaptop, 'Kiev')
    // userWithLaptop = movedUser
    //expect
    expect(movedUser.address.city).toBe('Kiev')
    expect(movedUser.laptop).toBe(userWithLaptop.laptop)
    expect(movedUser.address).not.toBe(userWithLaptop.address)
    expect(movedUser).not.toBe(userWithLaptop)
})
test('new user will have new laptop but old address', () => {
    //action
    const newUser = upgradeUserLaptop(userWithLaptop, 'Macbook')
    //expect
    expect(newUser.laptop.model).toBe('Macbook')
    expect(userWithLaptop.laptop.model).toBe('ZenBook')
    expect(newUser.laptop).not.toBe(userWithLaptop.laptop)
    expect(newUser.address).toBe(userWithLaptop.address)
    expect(newUser).not.toBe(userWithLaptop)
})
test('update js to ts', () => {
    //action
    const newUser = updateBooks(userWithBooks, 'js', 'ts')
    //expect
    expect(newUser.laptop).toBe(userWithBooks.laptop)
    expect(newUser.address).toBe(userWithBooks.address)
    expect(newUser).not.toBe(userWithBooks)
    expect(newUser.books).not.toBe(userWithBooks.books)
    expect(newUser.books[2]).toBe('ts')
    expect(userWithBooks.books[2]).toBe('js')
})
test('correct the travel route', () => {
    //action
    const newUser = updateTravelRoute(traveler, 'Latvia', 'Lithuania')
    //expect
    expect(traveler.countries[3]).toBe('Lithuania')
    expect(traveler.countries).not.toBe(newUser.countries)
})
test('book removed', () => {
    //action
    const newUser = removeBook(userWithBooks, 'js')
    //expect
    expect(userWithBooks.books.length).toBe(4)
    expect(newUser.books.length).toBe(3)
    expect(newUser.books[2]).not.toBe('js')
    expect(newUser.books).not.toBe(userWithBooks.books)
    expect(userWithBooks).not.toBe(newUser)
})
test('company name removed', () => {
    //action
    const newUser = updateCompany(userWithLaptopAndCompany, 'Епам', 'EPAM')
    //expect
    expect(userWithLaptopAndCompany).not.toBe(newUser)
    expect(newUser.companies[0].title).toBe('EPAM')
    expect(userWithLaptopAndCompany.companies[0].title).toBe('Епам')
    expect(newUser.companies.length).toBe(2)
    expect(newUser.address).toBe(userWithLaptopAndCompany.address)
    expect(userWithLaptopAndCompany.companies).not.toBe(newUser.companies)
    expect(userWithLaptopAndCompany.companies[0]).not.toBe(newUser.companies[0])

})
test('update company name in associated array', () => {
    const companies:{ [key: string]: { id: number, title: string }[] } = {
        'Dimich': [{id: 1, title: 'EPAM'}, {id: 2, title: 'IT-INCUBATOR'}],
        'Artem': [ {id: 1, title: 'IT-INCUBATOR'}],
    }
    //action
    const newCompanies: { [key: string]: { id: number, title: string }[] } = updateCompany2(companies, 'Dimich', 1, 'IT-KAMASUTRA')
    //expect
    expect(companies).not.toBe(newCompanies)
    expect(companies['Dimich'][0].title).toBe('EPAM')
    expect(newCompanies['Dimich'][0].title).toBe('IT-KAMASUTRA')
    //expect(companies['Dimich'][0].title).not.toBe(newCompanies[''])


})
