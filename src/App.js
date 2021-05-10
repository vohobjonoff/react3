import React from 'react'
import ReactDOM from 'react-dom'
import Pet from './Pet'
import SearchParams from './SearchParams'
import { Router } from '@reach/router'
import Details from "./Details"





// const App = () => {
//     return React.createElement("div", {}, [
//         React.createElement("h1", {}, "Adopt mE!"),
//         React.createElement(Pet, { name: "Luna", animal: "Dog", breed: "milk" }),
//         React.createElement(Pet, { name: "jack", animal: "crocadile", breed: "meet" }),
//         React.createElement(Pet, { name: "Hatiko", animal: "kingkong", breed: "bananas" })

//     ])
// }
const App = () => {
    return (
        <div>
            <h1>Adopt Me!</h1>
            {/* <SearchParams /> */}
            <Router>
                <SearchParams path="/" />
                <Details path="/details/:id" />
            </Router>
        </div>
    )
}






ReactDOM.render(<App />, document.getElementById("root"));