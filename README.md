TERMINAL
- install redux yarn add redux, yarn add react-redux

SRC -> INDEX.JS
- import requirements: react, provider, createStore, reducer, app   
- create a new store --- const store = createStore(reducer)
- render app
- wrap the app in the "provider", a react component, this provides the store to the entire app

SRC -> REDUCER.JS
- define default state, this takes in the state and an action
- define reducer function
- INCLUDE A SWITCH (start by returning the default state)
    - to create a switch it will accept an (action.type) as a parameter
    - if no case provided return the original state (start with this in the beginning)

SRC -> APP.JS
- Import and and include components
- Set any componentsDidMount to start when the app starts up
- MAP STATE TO PROPS
   - include the function mapStateToProps()
   - This connects the state from the reducer to be used as props
   - takes in state as an argument
   - use the reducer state to construct props to use, extract only the part that will be worked on
   - export connec
   t(mapStateToProps) near the end


SETTING UP A FORM
- Does my whole app care about these changes, onChange on a form does not need to know about the store
- redux app can still have it's own state
- If only the component that is on the page needs this info then it can stay as state
- connect the form to redux-react, second argument, do not need the first because we are only writting state not reading it (reading it would mean using this.props somewhere)


FETCHING WITH REDUX
- Add an action to the actions file for 'LOAD_API', import this action to the component you are fetching to
- Add a switch function to the reducer to handle this action 'LOAD API'
- Use componentDidMount function to fetch from an API the same way that we did in react
- Send the JSON from the api to update the state in the reducer, the array in the state starts out at as an empty array

componentDidMount = (){
  fetch('API URL')
  .then(resp => resp.json())
  .then(result => this.props.dispatch())
}

- add this action to the connect when exporting to use as a dispatcher -  {fetchAPI}


THUNK
- Middlewear that helps return functions instead of plain objects
- Add applyMiddlewear(thunk) to the create store const in index.js
- INSTALL: yarn add redux-thunk
- Add applyMiddlewear to the create store import
- Import {thunk} from 'redux-thunk'

COMBINED REDUCER
-  Import this from redux
- Import all reducer
- add in a const rootReducer = combineReducer(something: somethingReducer, somethingElse: somethingElseReducer)
- When reducers are combined
