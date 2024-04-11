import React from 'react'
import Dropdown from '.'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

describe('Dropdown', () => {
  const label = 'Select an option'
  const options = ['Option 1', 'Option 2', 'Option 3']
  const onChange = jest.fn()

  it('is truthy', () => {
    expect(Dropdown).toBeTruthy()
  })
  it('should render correctly', () => {
    render(<Dropdown label={label} options={options} onChange={onChange} />)

    expect(screen.getByText(label)).toBeInTheDocument()
    expect(screen.getByText('Option 1')).toBeInTheDocument()
    expect(screen.getByText('Option 2')).toBeInTheDocument()
    expect(screen.getByText('Option 3')).toBeInTheDocument()
  })

  it('should display options when clicked', () => {
    render(<Dropdown label={label} options={options} onChange={onChange} />)

    const dropdownSelect = screen.getByText(label)
    fireEvent.click(dropdownSelect)

    expect(screen.getByText('Option 1')).toBeInTheDocument()
    expect(screen.getByText('Option 2')).toBeInTheDocument()
    expect(screen.getByText('Option 3')).toBeInTheDocument()
  })

  it('should call onChange when an option is selected', () => {
    render(<Dropdown label={label} options={options} onChange={onChange} />)

    const dropdownSelect = screen.getByText(label)
    fireEvent.click(dropdownSelect)

    const option = screen.getByText('Option 2')
    fireEvent.click(option)

    expect(onChange).toHaveBeenCalledWith('Option 2')
  })
})
