import React from 'react'
import C from '../../constants'
import Seat from './seat'

const styles = {
  ulBears: {
    listStyleType: 'none',
    paddingLeft: '5%',
    paddingRight: '5%',
    marginLeft: '0px'
  },

  ulSofasLi: {
    display: 'inline-block'
  }
}

const getSofaProps = {
  getSeatCss: function( noOfTotalSeats ) {
    let seatWidth = ''
    if ( noOfTotalSeats === 4 )
      seatWidth = '25%'
    else if ( noOfTotalSeats === 3 )
      seatWidth = '33%'
    else
      seatWidth = '50%'
    return ({
      display: 'inline-block',
      marginLeft: '0px',
      width: seatWidth
    })
  },
  getSofaBackgroundImg: function( sofaLength ) {
    return ({
      backgroundImage: 'url(' + C.SRC_TO_IMAGES.SOFAS[sofaLength] + ')',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '100% 100%',
      display: 'block'
    })
  }
}

const Sofa = ( props ) => {
  return (
    <li
      style={ styles.ulSofasLi }
      className='small-4 medium-4 large-4 columns'
    >
      <div
        style={ getSofaProps.getSofaBackgroundImg( props.sofa.seats.length ) }
      >
        <ul style={ styles.ulBears }>
          { props.sofa.seats.map( ( seat ) => {
            return (
              <li
                key={ seat.seatId }
                style={ getSofaProps.getSeatCss( props.sofa.seats.length ) }
              >
                <Seat
                  key={ seat.seatId }
                  seat={ seat }
                />
              </li>
            )
          }) }
        </ul>
      </div>
    </li>
  )
}

export default Sofa