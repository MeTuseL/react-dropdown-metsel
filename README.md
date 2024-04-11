# Custom Dropdown React Component

## Description

Dropdown component for selecting options from a list.

## Installation

You can install the Dropdown component via npm:

```bash
npm install react-dropdown-metsel
```

## Usage

```javascript
import Dropdown from 'react-dropdown-metsel';
import 'react-dropdown-metsel/dist/index.css'; 
// import your styles

function MyComponent() {
    const options = ['Option 1', 'Option 2', 'Option 3'];

    const handleChange = (selectedOption) => {
        console.log('Selected option:', selectedOption);
    };

    return (
        <Dropdown
            label="Select an option"
            options={options}
            onChange={handleChange}
            customStyles={{
                dropdown: { /* Custom styles */ } || 'class-css' || styles.classCssModule,
                dropdownSelect: { /* Custom styles */ } || 'class-css' || styles.classCssModule,
                dropdownIcon: { /* Custom styles */ } || 'class-css' || styles.classCssModule,
                dropdownOptions: { /* Custom styles */ } || 'class-css' || styles.classCssModule,
                dropdownOption: { /* Custom styles */ } || 'class-css' || styles.classCssModule
            }}
        />
    );
}
```

## Props

- `label`: The label for the dropdown.
- `options`: An array of strings representing the options to be displayed in the dropdown.
- `onChange`: A function to be called when an option is selected. Receives the selected option as an argument.
- `customStyles`: Custom styles for the dropdown.

## Custom Styles

The `customStyles` object allows customizing the appearance of the Dropdown by providing CSS styles for different elements. It can contain the following properties:

- `dropdown`: Style applied to the main container of the Dropdown.
- `dropdownSelect`: Style applied to the selectable part of the Dropdown.
- `dropdownIcon`: Style applied to the angle icon of the Dropdown.
- `dropdownOptions`: Style applied to the dropdown list of options.
- `dropdownOption`: Style applied to each individual option in the dropdown list.


## Example

```javascript
<Dropdown
  label='Select a state'
  options={['Paris', 'Nantes', 'Madrid']}
  onChange={(selectedOption) => console.log('Selected state:', selectedOption)}
  customStyles={{
    dropdown: { width: '200px' },
    dropdownIcon: 'myClassName',
    dropdownSelect: styles.myClassName /* Using css module */
  }}
/>
```

## Dependencies

- react
- react-dom
- react-icons
- prop-types