import React, {useCallback, useMemo, useState} from 'react';
import {Select} from '../components/Select/Select';


export default {
    title: 'useMemo',
}

export const DifficultCountingExample = () => {

    const [a, setA] = useState<number>(5)
    const [b, setB] = useState<number>(5)

    let resultA = 1;
    let resultB = 1;

    resultA = useMemo(() => {
        let tempResultA = 1;
        for (let i = 1; i <= a; i++) {
            let fake = 0;
            while (fake < 100000000) {
                fake++;
                const fakeValue = Math.random();
            }
            tempResultA = tempResultA * i
        }
        return tempResultA
    }, [a]);


    for (let i = 1; i <= b; i++) {
        resultB = resultB * i
    }

    return <>
        <input value={a} onChange={(e) => setA(Number(e.currentTarget.value))}/>
        <input value={b} onChange={(e) => setB(+e.currentTarget.value)}/>
        <hr/>
        <div>
            Result for a: {resultA}
        </div>
        <div>
            Result for b: {resultB}
        </div>
    </>

}

const UsersSecret = (props: { users: Array<string> }) => {
    console.log('Users secret');
    return <div>{
        props.users.map((u, i) => <div key={i}>{u}</div>)
    }</div>
}

const Users = React.memo(UsersSecret)

export const HelpsForReactMemo = () => {
    console.log('HelpsForReactMemo')
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Dimych', 'Valera', 'Artem', 'Katya'])

    const newArray = useMemo(() => {
        const newArray = users.filter(u => u.toLowerCase().indexOf('a') > -1);
        return newArray;
    }, [users])

    const addUser = () => {
        const newUsers = [...users, 'Sveta ' + new Date().getTime()]
        setUsers(newUsers)
    }

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={() => addUser()}>add user</button>
        {counter}
        <Users users={newArray}/>
    </>
}

type CitiesPropsType = {
    value: string
    title: string
    country: string
    population: number
}

export const HelpsForReactMemoWithSelect = () => {
    console.log('HelpsForReactMemoWithSelect')
    const [counter, setCounter] = useState(0)
    const [cities, setCities] = useState<Array<CitiesPropsType>>([
        {value: '1', title: 'Minsk', country: 'BY', population: 2000000},
        {value: '2', title: 'Moscow', country: 'RU', population: 12000000},
        {value: '3', title: 'Kiev', country: 'UA', population: 3000000},
        {value: '4', title: 'Mogilev', country: 'BY', population: 380500},
        {value: '5', title: 'Grodno', country: 'BY', population: 370000},
        {value: '6', title: 'Kharkov', country: 'UA', population: 1420000},
        {value: '7', title: 'Saint-Petersburg', country: 'RU', population: 5000000},
        {value: '8', title: 'Dnepr', country: 'UA', population: 966500},
        {value: '9', title: 'Ekaterinburg', country: 'RU', population: 1400000},
    ])

    const citiesBY = useMemo(() => {
        return cities.filter(c => c.country === 'BY').map(c => ({value: c.value, title: c.title}))
    }, [cities])

    const citiesByLetterM = useMemo(() => {
        return cities.filter(c => c.title.indexOf('M') > -1);
    }, [cities])

    const bigPopulationCities = useMemo(() => {
        return cities.filter(c => c.population > 10000000).map(c => ({value: c.value, title: c.title}))
    }, [cities])

    const [countryValue, setCountryValue] = useState(citiesBY[0].title)
    const [letterMValue, setLetterMValue] = useState(citiesByLetterM[0].title)
    const [bigPopulation, setBigPopulation] = useState(bigPopulationCities[0].title)


    return <>

        <button onClick={() => setCounter(counter + 1)}>+</button>
        {counter}

        <Select onChange={setCountryValue}
                value={countryValue}
                items={citiesBY}
        />
        <br/>
        <Select onChange={setLetterMValue}
                value={letterMValue}
                items={citiesByLetterM}
        />
        <br/>
        <Select onChange={setBigPopulation}
                value={bigPopulation}
                items={bigPopulationCities}
        />

    </>
}

export const LikeUseCallback = () => {
    console.log('LikeUseCallback')
    const [counter, setCounter] = useState(0)
    const [books, setBooks] = useState(['React', 'JS', 'CSS', 'HTML'])

    const memoizedAddBook = useMemo(() => {
        return () => {
            console.log(books)
            const newBooks = [...books, 'Angular ' + new Date().getTime()]
            setBooks(newBooks)
        }
    }, [books]);

    const memoizedAddBook2 = useCallback(() => {
        console.log(books)
        const newBooks = [...books, 'Angular ' + new Date().getTime()]
        setBooks(newBooks)
    }, [books]);


    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        {counter}
        <Book addBook={memoizedAddBook2}/>
    </>
}

type BookSecretPropsType = {
    addBook: () => void
}

const BooksSecret = (props: BookSecretPropsType) => {
    console.log('BooksSecret');
    return <div>
        <button onClick={() => props.addBook()}>add book</button>
    </div>
}

const Book = React.memo(BooksSecret)