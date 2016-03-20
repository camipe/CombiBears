import React from 'react'
import C from '../../constants'
import { Link } from 'react-router'

const styles = {
  container: {
    height: '6.53em',
    paddingTop: '2%'
  },
  children: {
    height: '100%'
  },
  button: {
    height: '100%',
    display: 'inline-block',
    cursor: 'pointer'
  }
}

const Buttons = ( props ) => {
  const { children, saveLastSettings, foundAll } = props

  return (
    <div
      className='row'
      style={ styles.container }
    >
      <div
        className='small-4 medium-3 large-2 columns'
        style={ styles.children }
      >
        <Link
          to={ C.ROUTES.START }
        >
          <img
            src={ C.SRC_TO_IMAGES.ICONS.NEW_SOFA }
            alt='Icon for new sofa'
            draggable='false'
            style={ styles.button }
            onClick={ foundAll ? '' : () => saveLastSettings() }
          />
        </Link>
      </div>
      <div
        className='small-4 medium-6 large-8 columns'
        style={ styles.children }
      >
        { children }
      </div>
      <div
        className='small-4 medium-3 large-2 columns'
        style={ styles.children }
      >
        <Link
          to={ C.ROUTES.GAME }
        >
          <img
            src={ C.SRC_TO_IMAGES.ICONS.ARROW_LEFT }
            alt='Icon for returning to game view'
            draggable='false'
            style={ styles.button }
          />
        </Link>
      </div>
    </div>
  )
}

export default Buttons
