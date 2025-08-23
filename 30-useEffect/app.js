



const rootNode = document.getElementById('app')

const root = ReactDOM.createRoot(rootNode)

let counterName = "One"
root.render(<App />)

function App() {

    const [swapCounter, setSwapCounter] = React.useState(false)

    function handleClick() {
        console.log('Swap counters')
        setSwapCounter(!swapCounter)
        // This will toggle the swapCounter state between true and false
        // causing the component to re-render with the new state.
    }

    let counterOne = null;
    if (!swapCounter) {
        counterOne = <Counter name="One" />
    }
    return (
        <>
            <h1>Counters</h1>
            <section>
                <p>This is a simple React app.</p>
                <p>
                    <button className="button"
                        onClick={handleClick}>Swap Counters</button>
                </p>
                {counterOne}
                {swapCounter ? <Counter name="Two" /> : null}
                
            </section>
        </>
    )
}

function Counter(props) {
    
    const [numOfClicks, setNumofClicks] = React.useState({ total: 0})
    
    React.useEffect(() => {
        console.log('In use effect')
        document.title = `Clicks: ${numOfClicks.total}`

        return () => {
            console.log('Cleanup function for ' + props.name)
            document.title = 'React App'
            // This cleanup function will run when the component is unmounted or before the effect runs again.
        }
    }, [numOfClicks.total])

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
                    onClick={handleClick}>Right Click Me</button>
            </p>            
        </article>        
    )
}

