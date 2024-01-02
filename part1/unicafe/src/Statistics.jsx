import StatisticsLine from "./StatisticsLine"

const Statistics = (props) => {
  const getAll = () => {return props.good + props.neutral + props.bad}
  const getAverage = () => {return (props.good-props.bad) / getAll()}
  const getPositivePercentage = () => {return (props.good / getAll() * 100).toString() + " %"}

  if (getAll() > 0) {
    return (
       <table>
        <tbody>
        <StatisticsLine text="good" value={props.good} />
        <StatisticsLine text="neutral" value={props.neutral} />
        <StatisticsLine text="bad" value={props.bad} />
        <StatisticsLine text="all" value={getAll()} />
        <StatisticsLine text="average" value={getAverage()} />
        <StatisticsLine text="positive" value={getPositivePercentage()} />
        </tbody>
        </table> 
    )
  }

  return (
    <div>
      No Feedback Given
    </div>
  )
}

export default Statistics