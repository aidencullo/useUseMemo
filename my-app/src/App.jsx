import { useMemo, useState } from 'react'

function App() {
    console.log('rendering <App/>')

    const [count, setCount] = useState(0)
    
    const result = useMemo(() => {
	console.log('running useMemo!')
    })

    const increment = () => setCount(prev => prev + 1)

    return (
	<>
	    <button onClick={increment}>
		increment
	    </button>
	    {count}
	</>
    )
}

export default App
