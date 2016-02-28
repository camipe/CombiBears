import React, { PropTypes } from 'react'
import listensToClickOutside from 'react-onclickoutside/decorator'
import C from '../../constants'

const styles = {
  box: {
    width: '10em',
    height: '5em',
    backgroundColor: 'darkgray',
    border: '0.1em solid gray',
    zIndex: 2,
    position: 'absolute',
    top: 0,
    right: '-100%',
    cursor: 'auto'
  },
  color: {
    width: '1.5em',
    height: '1.5em',
    margin: '0.25em',
    display: 'inline-block',
    cursor: 'pointer',
    border: '0.1em solid gray'
  }
}

const colors = [
  C.COLORS.BLUE,
  C.COLORS.GREEN,
  C.COLORS.YELLOW,
  C.COLORS.RED,
  C.COLORS.PURPLE,
  C.COLORS.PINK,
  C.COLORS.ORANGE,
  C.COLORS.BROWN
]

class ColorPicker extends React.Component {
  constructor( props ) {
    super( props )
    this.handleClickOutside = this.handleClickOutside.bind( this )
  }

  handleClickOutside = () => {
    this.props.handleClickOutside()
  };

  render() {
    return (
      <div
        className='colorPicker'
        style={ styles.box }
      >
        { colors.map( ( color, key ) => {
          const colorStyle = Object.assign(
            {},
            styles.color,
            { backgroundColor: color }
          )
          return (
            <div
              className={ 'color' + color }
              key={ key }
              onClick={ this.props.handleBearColorChange( color ) }
              style={ colorStyle }
            />
          )
        }) }
      </div>
    )
  }
}

ColorPicker.props = {
  handleClickOutside: PropTypes.func.isRequired,
  handleBearColorChange: PropTypes.func.isRequired
}

export default listensToClickOutside( ColorPicker )
