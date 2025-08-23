

const rootNode = document.getElementById('app')

const root = ReactDOM.createRoot(rootNode)

let counterName = "One"
root.render(<App />)

function App() {

    return (
        <>
            <h1>Counters</h1>
            <section>
                <p>This is a simple React app.</p>
                <Counter name="One" />
                <Counter name="Two" />
            </section>
        </>
    )
}

function Counter(props) {
    
    const [numOfClicks, setNumofClicks] = React.useState(0)
    const handleClickWrong = () => {
        setNumofClicks(numOfClicks + 1)
        setNumofClicks(numOfClicks + 1)
        setNumofClicks(numOfClicks + 1)
    }

    const handleClick = () => {
        setNumofClicks(prevNum => prevNum + 1)
        setNumofClicks(prevNum => prevNum + 1)
        setNumofClicks(prevNum => prevNum + 1)
        // How does this work? It uses the previous state value to calculate the new state.
        // It's using the state inside the hook this time instead of numOfClicks. 
        // So as soon as state changes, the function will use the latest value of state. 
    }
    return (
        <article >
            <h2>Counter {props.name}</h2>
            <p>You clicked {numOfClicks} times</p>
            <button className="button"
                onClick={handleClick}>Click me</button>
            
        </article>        
    )
}

