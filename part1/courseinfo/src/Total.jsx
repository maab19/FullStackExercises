const Total = (props) => {
    const exerciseTotal = props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises
    return (
        <p>Number of exercises {exerciseTotal}</p>
    )
}

export default Total