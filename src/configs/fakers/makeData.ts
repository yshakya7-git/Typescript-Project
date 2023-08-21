import { faker } from "@faker-js/faker";

export type Person ={
    [x: string]: any;
    fname: string;
    lname: string;
    age: number;
    status: 'single' | 'complicated' | 'married';
    subRows?: Person[];
}

const range = (len: number) => {
    const arr = []
    for (let i = 0; i < len; i++) {
      arr.push(i)
    }
    return arr
  }

const newPerson = (): Person => {
    return{
        fname: faker.name.firstName(),
        lname: faker.name.lastName(),
        age: faker.datatype.number(40),
        status: faker.helpers.shuffle<Person['status']>([
            'married',
            'complicated',
            'single',
        ]) [0]!,
    }
}

export const makeData = (...lens: number[]) => {
    const makeDataLevel= (depth = 0): Person[] =>{
        const len = lens[depth]!;
    return range(len).map((): Person => {
      return {
        ...newPerson(),
        subRows: lens[depth + 1] ? makeDataLevel(depth + 1) : undefined,
      }
    })
}
  return (
    makeDataLevel()
  )
}
