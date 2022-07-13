import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchGreetings } from "../reducers/greetings_reducer"

function Greeting() {
  const messageDetails = useSelector((state) => state.greetingsReducer)
  
  const dispatch = useDispatch()
    
  useEffect(() => {
    dispatch(fetchGreetings())
  }, [])

  if (messageDetails.loading) {
    return <h1>Loading Message</h1>
  }
  return (
    <div>
      <h1>Greetings:</h1>
      <div>{messageDetails.message}</div>
    </div>
  )
}

export default Greeting