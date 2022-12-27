export type UserType = {
    name: string
    hairLength: number
    address: { city: string }
}
type LaptopType = {
    model: string
}
export type UserWithLaptopType = UserType & {
    laptop: LaptopType
}
export type UserWithBooksType = UserWithLaptopType & {
    books: string[]
}
export type TravelerType = UserType & {
    countries: string[]
}
export type CompaniesType = {
    companies: {
        id: number
        title: string
    }[]
}
export type UserLaptopCompanyType = UserWithLaptopType & CompaniesType
export const user = {
    name: 'Dude',
    hairLength: 32,
    address: {
        city: 'Minsk'
    }
}
export let userWithLaptop: UserWithLaptopType = {
    name: 'Dude',
    hairLength: 32,
    address: {
        city: 'Minsk'
    },
    laptop: {
        model: 'ZenBook'
    }
}
export let userWithBooks: UserWithBooksType = {
    name: 'Dude',
    hairLength: 32,
    address: {
        city: 'Minsk'
    },
    laptop: {
        model: 'ZenBook'
    },
    books: ['css', 'html', 'js', 'react'],
}
export const traveler: TravelerType = {
    name: 'Dude',
    hairLength: 32,
    address: {
        city: 'Minsk'
    },
    countries: ['Ukraine', 'Bulgaria', 'Poland', 'Latvia', 'Russia'],
}
export const userWithLaptopAndCompany: UserLaptopCompanyType = {
    name: 'Dude',
    hairLength: 32,
    address: {
        city: 'Minsk'
    },
    laptop: {
        model: 'ZenBook'
    },
    companies: [{id: 1, title: 'Епам'}, {id: 2, title: 'IT-INCUBATOR'}]
}
export const makeHairStyle = (user: UserType, power: number) => {
    const copyUser = {
        ...user,
        hairLength: user.hairLength / power
    }
    return copyUser;
}
export const moveUser = (user: UserType, newCity: string) => {
    return {
        ...user,
        address: {
            city: newCity,
        },
    };
}
export const moveUserWithLaptop = (userWithLaptop: UserWithLaptopType, newCity: string) => {
    return {
        ...userWithLaptop, address: {
            ...userWithLaptop.address,
            city: newCity,
        },
    }
}
export const upgradeUserLaptop = (userWithLaptop: UserWithLaptopType, laptop: string) => {
    return {
        ...userWithLaptop, laptop: {
            ...userWithLaptop.laptop,
            model: laptop,
        },
    }
}
export const addBooksToUser = (userWithBooks: UserWithBooksType, books: string[]) => {
    return {
        ...userWithBooks, books: [...books, ...userWithBooks.books]
    }
}
export const updateBooks = (userWithBooks: UserWithBooksType, bookOld: string, bookNew: string) => {
    return {
        ...userWithBooks, books: userWithBooks.books.map(book => {
            // return book === bookOld ? bookNew : book
            if (book === bookOld) {
                return bookNew
            } else return book
        }),
    }
}
export const updateTravelRoute = (traveler: TravelerType, unvisitedCountry: string, visitedCountry: string) => {
    return {
        ...traveler,
        countries: traveler.countries.map(country => country === unvisitedCountry ? visitedCountry : country)
    }

}
export const removeBook = (userWithBooks: UserWithBooksType, book: string) => {
    return {
        ...userWithBooks, books: userWithBooks.books.filter(booK => booK !== book)
    }
}
export const updateCompany = (userWithLaptopAndCompany: UserLaptopCompanyType,
                              wrongCompanyName: string,
                              correctCompanyName: string) => {
    return {
        ...userWithLaptopAndCompany, companies: userWithLaptopAndCompany.companies.map(company => {
            return company.title === wrongCompanyName ? {...company, title: correctCompanyName} : company
        })
    }
}
export const updateCompany2 = (companies: { [key: string]: { id: number, title: string }[] }, userName: string, companyID: number, newTitle: string) => {
    return ({
            ...companies,
            [userName]: companies[userName].map(company => company.id === companyID ? {
                ...company,
                title: newTitle
            } : company)
        }
    )
}


