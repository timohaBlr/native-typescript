export type StudentType = {
    name: string
    age: number
    isMarried: boolean
    scores: number
}
export const students: StudentType[] = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85,
    },
    {
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 90,
    },
    {
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120,
    },
    {
        name: "John",
        age: 19,
        isMarried: false,
        scores: 100,
    },
    {
        name: "Helen",
        age: 20,
        isMarried: false,
        scores: 110,
    },
    {
        name: "Ann",
        age: 20,
        isMarried: false,
        scores: 105,
    },
];
export type UserType = {
    name: string
    age: number
    isMarried: boolean
    friends: string[]
}
export const user: UserType = {
    name: "Bob",
    age: 23,
    isMarried: false,
    friends: ["Alex", "Nick", "John"],
};

//https://www.dev-notes.ru/articles/deep-copying-using-structured-clone/

//5. Отсортируйте студентов по успеваемости (лучший идёт первым)
export const studentsScoreSorter = (students: StudentType[]) => {
    return [...students].sort((a, b) => b.scores - a.scores)
}
//5a. Отсортируйте студентов по алфавиту
export const studentsNameSorter = (students: StudentType[]) => {
    return [...students].sort((a, b) => {
        return a.name >= b.name ? 1 : -1
    })
}
//6. Сформируйте массив студентов, у которых 100 и более баллов
export const studentsScoreFilter = (students: StudentType[], score: number) => {
    return [...students].filter(student => student.scores >= score)
}
//6a. Сформируйте массив из трёх лучших студентов
export const studentsTopMaker = (students: StudentType[], top: number) => {
    return studentsScoreSorter(students).slice(0, 3)
}
//6b. Объедините массивы deepCopyStudents и topStudents так,
// чтоб сохранился порядок сортировки

//7. Сформируйте массив холостых студентов
export const notMarriedStudentsCreator = (students: StudentType[]) => {
    return [...students].filter(student => student.isMarried === false)
}
//8. Сформируйте массив имён студентов
export const studentNamesExecutor = (students: StudentType[]) => {
    return [...students].map(student => student.name)
}
//8a. Сформируйте строку из имён студентов, разделённых
// - пробелом
// - запятой
//9. Добавьте всем студентам свойство "isStudent" со значением true
//10. Nick женился. Выполните преобразование массива students
export const wedding = (students: StudentType[], groom: string) => {
    return [...students].map(student => student.name === groom
        ? {...student, isMarried: true}
        : student
    )
}
//11. Найдите Студентку по имени Ann
//12. Найдите студента с самым высоким баллом
//12a. Найдите 2 студента с самым высоким баллом
//13. Найдите сумму баллов всех студентов
// 14. Напишите функцию addFriends, которая принимает параметром массив students
// и возвращает новый массив, при этом добавляет в каждому студенту свойство .friends,
// значением которого является массив имён всех остальных студентов из массива,
// за исключением собственного имени студента. Т.е. в друзьях у Боба Боба быть не должно.

export const createFriendsList = (students: StudentType[]) => {
    return [...students].map(student => (
        {...student, friends: studentNamesExecutor(students.filter(f => f.name !==student.name))}

    ))
}
// [ 'Bob', 'Alex', 'Nick', 'John', 'Helen', 'Ann' ]