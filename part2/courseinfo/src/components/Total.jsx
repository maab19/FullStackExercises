const Total = ({parts}) => {
    const exerciseTotal = parts.map(part => part.exercises).reduce((partialSum, a) => partialSum + a, 0)
    return (
        <p><b>total of {exerciseTotal} exercises</b></p>
    )
}

export default Total