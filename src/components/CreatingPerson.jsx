const person = {
    name: 'John Smith',
    address:{
        line1: '123 Spring Dr',
        city: 'Springfield',
        country: 'USA'
    },
    profiles: ['Twitter', 'LinkedIn', 'Instagram'],
    printProfile: ()  => {
        person.profiles.map(
            profile => console.log(profile)
        )
    }
}

export default function CreatingPerson(){
    return(
        <>
            <div>{person.name}</div>
            <div>{person.address.line1}</div>
            <div>{person.address.line2}</div>
            <div>{person.profiles[0]}</div>
            <div>{person.printProfile()}</div>
        </>
    )
}