const rootNode = document.getElementById('app')

const root = ReactDOM.createRoot(rootNode)

let counterName = "One"
root.render(React.createElement(App))

function App() {
    return React.createElement("section", null, 
        React.createElement("h1", null, "Counters"),
        React.createElement("p", null, "This is a simple React app."),
        React.createElement("section", null,
            React.createElement(Counter, null))
    )
}

function Counter(props) {
    
    return (
        React.createElement("article", null,
            React.createElement("h2", null, "Counter ", props.name),
            React.createElement("p", null, "You clicked 1 times"),
            React.createElement("button", null, "Click me")
        )
    )
}

function Counter(props) {
    
    return (
        React.createElement("article", null,
            React.createElement("h2", null, "Counter ", props.name),
            React.createElement("p", null, "Times clicked: 1"),
            React.createElement("button", { className: "button" }, "Click me")
        )
    )
}

function rerender() {
    console.log('Rerender...')
    counterName = "Two"
    root.render(React.createElement(App))
}