import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title, onAdd, showAdd }) => {
    // const onClick = () => {
    //     console.log('Button Clicked');
    // }
    return (

// While we using Inline CSS then must use double curly braces - {{ }}
// If Internal CSS then single curly braces - { }
// In React we need write class as className
        <header className='header'>
            {/* <h1 style={{color: 'red', backgroundColor: 'black',}}>{title}</h1> */}
            {/* <h1 style={headingStyle}>{title}</h1> */}
            <h1>{title}</h1>
            {/* <button className='btn'>Add</button> */}
            <Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'Close' : 'Add'} onClick={onAdd} />
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

// Starting of Internal CSS in React.
// const headingStyle = {
//     color: 'red',
//     backgroundColor: 'black',
// }
// Ending

export default Header