import React, { PropTypes } from 'react'
import Modal from 'react-modal'
import C from '../../constants'

const modalStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
}

const InfoFlash = ( props ) => {
  const {
    open,
    handleOpenModal,
    handleCloseModal,
    handleModalCloseRequest,
    style
  } = props

  return (
    <div>
      <img
        src={ C.SRC_TO_IMAGES.ICONS.INFO }
        style={ style }
        onClick={ handleOpenModal }
      />
      <Modal
        isOpen={ open }
        onRequestClose={ handleModalCloseRequest }
        style={ modalStyles }
      >
        <button
          className='close-button'
          aria-label='Close alert'
          type='button'
          onClick={ handleCloseModal }
        >
          <span aria-hidden='true'>&times;</span>
        </button>
        <h1>Info flash</h1>
        <p>Some information for the teachers and parents.</p>
      </Modal>
    </div>
  )
}

InfoFlash.propTypes = {
  open: PropTypes.bool.isRequired,
  handleOpenModal: PropTypes.func.isRequired,
  handleCloseModal: PropTypes.func.isRequired,
  handleModalCloseRequest: PropTypes.func.isRequired,
  style: PropTypes.object
}

export default InfoFlash
