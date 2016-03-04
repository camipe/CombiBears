import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import MediaQuery from 'react-responsive'
// import { Link } from 'react-router'
import C from '../../constants'
import SofaOptions from './sofaOptions'
import BearOptions from './bearOptions'
import InfoFlash from './infoFlash'
import Option from './option'
import Actions from '../../redux/actions/'

const styles = {
  center: {
    textAlign: 'center'
  },
  logotype: {
    marginTop: '12px'
  },
  infoButton: {
    width: '150px',
    cursor: 'pointer'
  },
  infoButtonTiny: {
    width: '100px',
    cursor: 'pointer',
    display: 'block',
    margin: '1em auto'
  },
  startButton: {
    // position: 'relative',
    // bottom: '70px'
    // right: '50%'
  }
}

class StartView extends React.Component {
  constructor( props ) {
    super( props )
    /* One way of using this.setState() when using ES2015 classes
     * is to either bind this here in the constructor...
     */
    this.onCloseModal = this.onCloseModal.bind( this )
    this.onModalCloseRequest = this.onModalCloseRequest.bind( this )
    this.state = {
      modalIsOpen: false
    }
  }

  /* ...or binding this here using an arrow function. I don't know if there
   * is a best practice or ESLint rules for this "issue". Note the
   * semicolon that must be on the end of a class property!
   */
  onOpenModal = () => {
    this.setState({ modalIsOpen: true })
  };

  onCloseModal() {
    this.setState({ modalIsOpen: false })
  }

  onModalCloseRequest() {
    // Opportunity to validate something and keep the
    // modal open even if it requested to be closed
    this.setState({ modalIsOpen: false })
  }

  render() {
    return (
      <div className='startView'>
        <div className='row'>
          <div className='medium-12 columns'>
            <div style={ styles.center }>
              <img
                className='medium-12 columns'
                style={ styles.logotype }
                id='Logotyp'
                alt='Logotyp'
                src={ C.SRC_TO_IMAGES.LOGOTYPE }
                width='600px'
              ></img>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='small-12 medium-6 columns'>
            <div style={ styles.center }>
              <Option>
                <SofaOptions
                  selected={ this.props.numberOfSeats }
                  handleIncreaseNumberOfSeats={
                    this.props.increaseNumberOfSeats
                  }
                  handleDecreaseNumberOfSeats={
                    this.props.decreaseNumberOfSeats
                  }
                />
              </Option>
            </div>
          </div>
          <div className='small-12 medium-6 columns'>
            <div style={ styles.center }>
              <Option>
                <BearOptions
                  bears={ this.props.bears }
                  updateBear={ this.props.updateBear }
                  deleteBear={ this.props.deleteBear }
                />
              </Option>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='small-12 large-8 large-offset-2 columns'>
            <div style={ Object.assign({}, styles.center, styles.startButton ) }>
              { /* <Link
                to={ '/start' }
              > */ }
              <img
                id='StartButton'
                alt='StartButton'
                src={ C.SRC_TO_IMAGES.ICONS.START }
                height='50px'
                width='150px'
                style={ { cursor: 'pointer' } }
                onClick={ () => {
                  this.props.startGame()
                  this.props.resetGame()
                  this.props.initBears()
                  this.props.initSofa()
                } }
              ></img>
              { /* </Link> */ }
            </div>
          </div>
          <MediaQuery query='(min-width: 1024px)'>
            <div className='large-2 columns'>
              <InfoFlash
                style={ styles.infoButton }
                handleOpenModal={ this.onOpenModal }
                handleCloseModal={ this.onCloseModal }
                handleModalCloseRequest={ this.onModalCloseRequest }
                open={ this.state.modalIsOpen }
              />
            </div>
          </MediaQuery>
        </div>
        <MediaQuery query='(max-width: 1023px)'>
          <InfoFlash
            style={ styles.infoButtonTiny }
            handleOpenModal={ this.onOpenModal }
            handleCloseModal={ this.onCloseModal }
            handleModalCloseRequest={ this.onModalCloseRequest }
            open={ this.state.modalIsOpen }
          />
        </MediaQuery>
      </div>
    )
  }
}

StartView.propTypes = {
  numberOfSeats: PropTypes.number.isRequired,
  bears: PropTypes.object.isRequired,
  increaseNumberOfSeats: PropTypes.func.isRequired,
  decreaseNumberOfSeats: PropTypes.func.isRequired,
  updateBear: PropTypes.func.isRequired,
  deleteBear: PropTypes.func.isRequired
}

const mapStateToProps = ( state ) => state.settings

const mapDispatchToProps = ( dispatch ) => {
  return {
    resetGame: () => {
      dispatch( Actions.resetGame() )
    },
    increaseNumberOfSeats: () => {
      dispatch( Actions.increaseNumberOfSeats() )
    },
    decreaseNumberOfSeats: () => {
      dispatch( Actions.decreaseNumberOfSeats() )
    },
    updateBear: ( bear ) => {
      dispatch( Actions.updateBear( bear ) )
    },
    deleteBear: ( bearId ) => {
      dispatch( Actions.deleteBear( bearId ) )
    },
    startGame: () => {
      dispatch( Actions.startGame() )
    },
    initBears: () => {
      dispatch( Actions.initBears() )
    },
    initSofa: () => {
      dispatch( Actions.initSofa() )
    }
  }
}

export default connect( mapStateToProps, mapDispatchToProps )( StartView )
