import {
    createFriendsList,
    notMarriedStudentsCreator, studentNamesExecutor,
    students,
    studentsNameSorter, studentsScoreFilter,
    studentsScoreSorter, studentsTopMaker,
    StudentType, wedding
} from "./01-tests/10-02";

//data
let studentS = [] as StudentType[];
beforeEach(() => {
    studentS = students
})
test('sorter students by score', () => {
    //action
    const sortedStudents = studentsScoreSorter(studentS)
    //expect
    expect(sortedStudents).not.toBe(studentS)
    expect(sortedStudents[0].scores).toBe(85)
    expect(studentS[0].scores).toBe(85)
    expect(sortedStudents[5].scores).toBe(120)
    expect(studentS[5].scores).toBe(105)
})

test('sorter students by name', () => {
    //action
    const sortedStudents = studentsNameSorter(studentS)
    //expect
    expect(sortedStudents).not.toBe(studentS)
    expect(sortedStudents[0].name).toBe('Alex')
    expect(studentS[0].name).toBe('Bob')
    expect(sortedStudents[5].name).toBe('Nick')
    expect(studentS[5].name).toBe('Ann')
})
test('filter students by score', () => {
    //action
    const sortedStudents = studentsScoreFilter(studentS, 100)
    //expect
    expect(sortedStudents).not.toBe(studentS)
    expect(sortedStudents[0].scores).toBe(120)
    expect(sortedStudents[1].scores).toBe(100)

})
test('students top 3', () => {
    //action
    const sortedStudents = studentsTopMaker(studentS, 3)
    //expect
    expect(sortedStudents).not.toBe(studentS)
    expect(sortedStudents[0].scores).toBe(120)
    expect(sortedStudents[sortedStudents.length - 1].scores).toBe(105)
})
test('not married students', () => {
    //action
    const sortedStudents = notMarriedStudentsCreator(studentS)
    //expect
    expect(sortedStudents).not.toBe(studentS)

    for (let i = 0; i < sortedStudents.length; i++) {
        expect(sortedStudents[i].isMarried).toBe(false)
    }
})
test('students names', () => {
    //action
    const sortedStudents = studentNamesExecutor(studentS)
    //expect
    expect(sortedStudents).not.toBe(studentS)
      for (let i = 0; i < sortedStudents.length; i++) {
        expect(typeof sortedStudents[i]).toBe('string')
    }
    expect(sortedStudents[0]).toBe('Bob')
})
test('weddings with same groom', () => {
    //action
    const sortedStudents = wedding(studentS, 'Nick')
    //expect
    expect(sortedStudents).not.toBe(studentS)
    expect(sortedStudents[2].isMarried).toBe(true)
    expect(students[2].isMarried).toBe(false)
})

test('create a friendship', () => {
    //action
    const sortedStudents = createFriendsList(studentS)
    //expect
    expect(sortedStudents).not.toBe(studentS)
    expect(sortedStudents[2].friends).toStrictEqual([ 'Bob', 'Alex', 'John', 'Helen', 'Ann' ])
    expect(sortedStudents[5].friends).toStrictEqual([ 'Bob', 'Alex', 'Nick', 'John', 'Helen'])
    })
