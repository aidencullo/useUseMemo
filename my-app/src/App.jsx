import { useMemo } from 'react'

function App() {
    console.log('rendering <App/>')
    
    const result = useMemo(() => {
	console.log('running useMemo!')
    })

    return 1
}

export default App
