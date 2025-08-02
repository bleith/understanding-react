const rootNode = document.getElementById('app')

const root = ReactDOM.createRoot(rootNode)
root.render(React.createElement(App))

console.log(React) 

function App() {
    return (
        React.createElement("article", null,
            React.createElement("h1", null, "Hello World"),
            React.createElement("p", null, "This is a simple React app."),
            React.createElement("h2", null, "Counter"),
            React.createElement("p", null, "You clicked 1 times"),
            React.createElement("button", null, "Click me")
        )
    )
}

console.log(App())


// Before react does its work - runs this first, 
// then render waits for the Javascript engine to be ready.
let articleElements = document.getElementsByTagName('article')
let articleElement = document.getElementsByTagName('article').item(0)

console.log(articleElements)
console.log(articleElement)

setTimeout(() => {
    let articleElements = document.getElementsByTagName('article')
    let articleElement = document.getElementsByTagName('article').item(0)

    console.log(articleElements)
    console.log(articleElement)
}, 1000)
