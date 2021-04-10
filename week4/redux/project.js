const redux = require("redux");


function addContact(contact){
    return{
        type: 'ADD_CONTACT',
        payload: contact
    }
}

function removeContact(contact){
    return{
        type: 'REMOVE_CONTACT',
        payload: contact
    }
}
const initialstate = {
    contactList: [],
    contacts: 
    {
        name: "",
        phone: "",
        email: ""
    }
}


function reducer(state = initialstate, action) {
    switch(action.type) {
        case "ADD_CONTACT":
            return {
                ...state,
                contacts: action.payload,
                contactList: [...state.contactList, action.payload]
            }
        case "REMOVE_CONTACT": {
            const updatedArr = state.contactList.filter(contact => contact !== action.payload)
            console.log(updatedArr)
                return {
                    ...state,
                    contactList: updatedArr
                }
            }
        default:
            return state
    }
}


const store = redux.createStore(reducer)
store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch(addContact({name: "Olivia Kosub", phone: "345-543-7890", email: "babygirl19@gmail.com"}))
store.dispatch(addContact({name: "Billy Bob", phone: "654-987-1234", email: "shotgun80@gmail.com"}))
store.dispatch(addContact({name: "Fred Flinstone", phone: "123-456-7890", email: "pebble1960@gmail.com"}))
store.dispatch(addContact({name: "Billy Ray", phone: "815-897-9510", email: "clasicCountry@gamil.com"}))
store.dispatch(addContact({name: "Wile E. Coyote", phone: "575-698-1234", email: "roadrunner@gmail.com"}))

store.dispatch(removeContact({name: "Fred Flinstone", phone: "123-456-7890", email: "pebble1960@gmail.com"}))
store.dispatch(removeContact({name: "Billy Ray", phone: "815-897-9510", email: "clasicCountry@gamil.com"}))