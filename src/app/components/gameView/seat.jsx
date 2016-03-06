import React, { PropTypes } from 'react'
import C from '../../constants'
import { DropTarget } from 'react-dnd'

const seatTarget = {
  drop( props, monitor ) {

    return {
      containerTypeName: props.containerTypeName,
      index: props.index
    }
  }
}

const collect = ( connect, monitor ) => {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop()
  }
}

const Seat = ( props ) => {
  const { connectDropTarget, isOver } = props

  const styles = {
    seat: {
      display: 'inline-block',
      width: '25%',
      height: '100%',
      zIndex: 1,
      opacity: 1,
      border: '1px solid #f00',
      textAlign: 'center',
      verticalAlign: 'top'
    },
    startingAreaSeat: {
      background: 'url(' + C.SRC_TO_IMAGES.SEATS.STOOL + ') no-repeat bottom'
    }
  }

  const getCurrentStyles = () => {

    // If its a starting area, we need the special styles.
    if ( props.containerTypeName === C.COMPONENT_NAMES.STARTING_AREA )
      return Object.assign({}, styles.seat, styles.startingAreaSeat )

    return styles.seat
  }

  return connectDropTarget(
    <div style={ getCurrentStyles() } >
    { props.children }
    </div>
  )
}

Seat.propTypes = {
  containerTypeName: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired
}

export default DropTarget( C.COMPONENT_NAMES.BEAR, seatTarget, collect )( Seat )
