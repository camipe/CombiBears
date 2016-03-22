import React, { PropTypes } from 'react'
import C from '../../constants'
import BasicSeat from './basicSeat'
import BasicBear from './basicBear'

class BasicSofa extends React.Component {
  constructor( props ) {
    super( props )

  }

  componentDidMount = () => {
    if ( document.getElementById( 'lastSaved' ) !== null ) {
      const lastSaved = document.getElementById( 'lastSaved' )
      const timeoutTime = 2000
      const timeoutFunction = () => {
        lastSaved.removeAttribute( 'style' )
        lastSaved.setAttribute( 'style', 'padding: 4% 5% 0 5%;' )
      }
      lastSaved.setAttribute( 'style', 'background-color: #59b585; padding: 4% 5% 0 5%;' )
      const topPos = lastSaved.offsetTop
      document.getElementById( 'sofaList' ).scrollTop = topPos
      setTimeout( timeoutFunction, timeoutTime )
    }
  };

  render() {
    const getSofaStyles = () => {

      const sofaStyles = {
        twoSeats: {
          background: 'url(' + C.SRC_TO_IMAGES.SOFAS['2'] + ') no-repeat',
          padding: '5% 14% 23%'
        },
        threeSeats: {
          background: 'url(' + C.SRC_TO_IMAGES.SOFAS['3'] + ') no-repeat',
          padding: '8% 14% 23%'
        },
        fourSeats: {
          background: 'url(' + C.SRC_TO_IMAGES.SOFAS['4'] + ') no-repeat',
          padding: '10% 14% 23%'
        }
      }

      switch ( this.props.settings.numberOfSeats ) {
      case 2: return sofaStyles.twoSeats
      case 3: return sofaStyles.threeSeats
      case 4: return sofaStyles.fourSeats
      default: return sofaStyles.fourSeats
      }
    }

    const genericStyles = {
      sofa: {
        backgroundSize: '100% auto cover',
        backgroundPosition: 'center top',
        backgroundRepeat: 'no-repeat',
        textAlign: 'center',
        width: '100%'
      },
      seatContainer: {
        width: '100%',
        height: '86%'
      },
      bear: {
        width: '95%',
        margin: 'auto'
      }
    }

    // Merge styles: genericStyles, prop.styles, and sofaStyles
    const mergedStyles = Object.assign({}, genericStyles.sofa, this.props.styles, getSofaStyles() )

    const renderSeat = ( bearKey, seatIndex, containerTypeName ) => {
      const bear = bearKey !== null ?
        <BasicBear
          key={ seatIndex }
          index={ seatIndex }
          style={ mergedStyles.bear }
          bear={ this.props.settings.bears[bearKey] }
        /> :
        null

      return (
        <BasicSeat
          key={ seatIndex }
          index={ seatIndex }
          containerTypeName={ containerTypeName }
          numberOfSeats={ this.props.bearsOnSofa.length }
        >
          { bear }
        </BasicSeat>
      )
    }

    return (
      <div
        className={ C.COMPONENT_NAMES.SOFA + ' allowTouchMove' }
        style={ mergedStyles }
      >
        <div style={ genericStyles.seatContainer }>

          {
            this.props.bearsOnSofa.map( ( bearKey, index ) =>
              renderSeat( bearKey, index, C.COMPONENT_NAMES.SOFA )
            )
          }

        </div>
      </div>
    )
  }
}

BasicSofa.propTypes = {
  bearsOnSofa: PropTypes.array.isRequired,
  settings: PropTypes.object.isRequired
}

export default BasicSofa