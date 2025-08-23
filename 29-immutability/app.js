

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
    
    const [numOfClicks, setNumofClicks] = React.useState({ total: 0})
    const handleClickWrong = () => {
        numOfClicks.total = numOfClicks.total + 1
        // It's not going to trigger a rerender because React doesn't know state has changed.
        // The memory location of numOfClicks hasn't changed. 
        setNumofClicks(numOfClicks)
    }

    const handleClick = () => {
        const newNumOfClicks = { ...numOfClicks, total: numOfClicks.total + 1 }
        // This creates a new object with the same properties as numOfClicks
        setNumofClicks(newNumOfClicks)
    }
    return (
        <article>
            <h2>Counter {props.name}</h2>
            <p>You clicked {numOfClicks.total} times</p>
            <p>
                <button className="button"
                    onClick={handleClickWrong}>Wrong Click Me</button>
            </p>
            <p>
                <button className="button"
                    onClick={handleClick}>Right Click Me</button>
            </p>            
        </article>        
    )
}