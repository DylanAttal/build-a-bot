// this filter prepends a dollar sign to the cost of the robot
// and gives it two decimal places
export default function(amount, symbol) {
  return `${symbol}${amount.toFixed(2)}`
}
