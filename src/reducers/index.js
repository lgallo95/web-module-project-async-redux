import {FETCH_START, FETCH_SUCCESS, FETCH_FAIL,} from '../actions/index'

const initialState = {
    person: {
        id:146,
        name: "Glexo Slim Slom",
        status: 'Alive',
        image: 'https://rickandmortyapi.com/api/character/avatar/146.jpeg'
    },
    isFetching: false,
    error: ''
  };
  
  export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case(FETCH_START):
            return({
                ...state,
                person: {},
                isFetching: true,
                error:''
            });
        case(FETCH_SUCCESS):
            return({
                ...state,
                person: action.payload,
                isFetching: false,
                error:''
            })
        case(FETCH_FAIL):
            return({
                ...state,
                person: {},
                isFetching: false,
                error: action.payload
            })
      
        default:
        return state;
    }
  };

