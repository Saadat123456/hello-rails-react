const START_FETCHING = 'START_FETCHING'
const FETCH_BOOKS = 'FETCH_BOOKS'
const STOP_FETCHING = 'STOP_FETCHING'

const initialState = {
  loading: false,
  message: ''
}

export const fetchGreetings = () => async (dispatch) => {
  dispatch({
    type: START_FETCHING
  })

  const response = await fetch('/v1/greeting', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }
  })

  const responseJSON = await response.json()

  dispatch({
    type: FETCH_BOOKS,
    random_greeting: responseJSON
  })

  dispatch({
    type: STOP_FETCHING
  })
}

const greetingsReducer = ( state = initialState, actions) => {
  switch (actions.type) {
    case START_FETCHING:
      return {
        ...state,
        loading: true
      }

    case STOP_FETCHING:
      return {
        ...state,
        loading: false
      }

    case FETCH_BOOKS:
      return {
        ...state,
        message: actions.random_greeting.greeting
      }
    default:
      return state
  }
}

export default greetingsReducer