const Result = ({ message, resultClass }) => (
    <div className={"row centered text " + resultClass}>{message}</div>
)

export default Result;