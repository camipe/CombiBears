import React, { PropTypes } from 'react'
import Seat from './seat'
import Teddybear from './teddybear'

const containerTypeName = 'Sofa'

class Sofa extends React.Component {
  getSeatsImage() {
    switch ( this.props.bears.length ) {
    case 2: return 'two'
    case 3: return 'three'
    case 4: return 'four'
    default: return 'four'
    }
  }

  renderSeat( teddyColor, seatIndex ) {
    const bear = typeof teddyColor === "string" ?
      <Teddybear
        key={ seatIndex }
        index={ seatIndex }
        onBeginDrag={ this.props.onBeginDrag }
        color={ teddyColor }
        containerTypeName={ containerTypeName }
      /> :
      null

    return (
      <Seat
        key={ seatIndex }
        index={ seatIndex }
        onDrop={ this.props.onDrop }
        canDrop={ bear === null }
        containerTypeName={ containerTypeName }
      >
        { bear }
      </Seat>
    )
  }

  render() {
    const styles = {
      sofa: {
        border: '1px solid #00f',
        background: 'url(public/pics/sofas/' + this.getSeatsImage() + '.png)',
        backgroundSize: 'contain',
        backgroundPosition: 'top',
        backgroundRepeat: 'no-repeat',
        position: 'absolute',
        bottom: '80px',
        margin: '0 auto',
        left: '0',
        right: '0',
        width: '500px',
        height: '220px'
      },
      seatContainer: {
        height: '65%'
        // background: 'rgba(0, 255, 255, 0.5)'
      }
    }

    return (
      <div
        className='sofa'
        style={ styles.sofa }
      >
        <div style={ styles.seatContainer }>
          {
            this.props.bears.map( ( color, index ) =>
              this.renderSeat( color, index )
            )
          }
        </div>
      </div>
    )
  }
}

Sofa.propTypes = {
  bears: PropTypes.arrayOf( PropTypes.string ).isRequired,
  onBeginDrag: PropTypes.func.isRequired
}

export default Sofa
