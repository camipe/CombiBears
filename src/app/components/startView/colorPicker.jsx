import React from 'react'

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
  'blue',
  'green',
  'yellow',
  'red',
  'purple',
  'pink',
  'orange',
  'brown'
]

const ColorPicker = () => {
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
            style={ colorStyle }
          />
        )
      }) }
    </div>
  )
}

export default ColorPicker