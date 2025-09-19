import { Suspense } from 'react'
import './App.css'
import Countries from './Components/Countries/Countries'

const countryPromise = fetch("https://openapi.programming-hero.com/api/all")
                        .then(res => res.json())
function App() {
  return (
    <>
      <Suspense fallback={<p>Loading, Please Wait......</p>}>
        <Countries promise={countryPromise}></Countries>
      </Suspense>
    </>
  )
}

export default App
