//useState, useEffect, setInterval, props
import { useEffect, useState } from 'react'
import SimpleCounter from "./SimpleCounter"
import calculateSeconds from './lib/time';
function App() {
  const [counter, setCounter] = useState(0); //useState keeps track of counter
  useEffect(() => {
    // component mounting --> "putting into browser"
    const interval = setInterval(() => {
      setCounter(counter => counter + 1)
    }, 1000)
    // component unmount
    return () => clearInterval(interval)
  }, [counter])
  // no dependency array: constantly update as needed
  // empty dependency array: runs once
  // array with state variable: only updaes when state changes
  return (
    <>
      <SimpleCounter
        thousandsDigit = {calculateSeconds(counter, 1000)}
        hundredsDigit = {calculateSeconds(counter, 100)}
        tensDigit = {calculateSeconds(counter, 10)}
        onesDigit = {calculateSeconds(counter, 1)}
      />
    </>
  )
}
export default App