import './index.css'

const DenominationItem = props => {
  const {amount, func} = props
  const {id, value} = amount

  const withdrawAmount = () => {
    func(value)
  }

  return (
    <li className="list-item">
      <button type="button" onClick={withdrawAmount} key={id}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
