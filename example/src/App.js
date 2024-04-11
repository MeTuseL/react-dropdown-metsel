import React, { useState } from 'react'
import Dropdown from 'react-dropdown-mtusel'
import 'react-dropdown-mtusel/dist/index.css'

const App = () => {
  const [state, setState] = useState('France')
  const options = ['Option 1', 'Option 2', 'Etats-Unis']
  const handleChange = (selectedOption) => {
    console.log('Selected option:', selectedOption)
    setState('Allo')
  }
  console.log(state)
  return (
    <>
      <Dropdown
        label='selected an opt'
        options={options}
        onChange={handleChange}
        customStyles={{
          dropdown: { width: '200px' },
          dropdownSelect: { backgroundColor: 'rgb(197, 169, 27)' }
        }}
      />
    </>
  )
}

export default App
