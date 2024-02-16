import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RunUseRef, Runusestate, RunUseEffect, RunUseMemo } from './components/imports'

function App() {

  return (
    <>

      {<Runusestate />}
      <br />
      {<RunUseRef />}
      {<RunUseMemo />}
      {<RunUseEffect />}

    </>


  )
}

export default App
