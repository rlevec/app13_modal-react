import React, {useContext} from 'react'
import { FaTimes } from 'react-icons/fa'
import { AppContext } from './context'

const Modal = () => {
  const {isModalOpen, closedModal} = useContext(AppContext)

  return (
    <div className={`${isModalOpen ? 'modal-overlay show-modal' : 'modal-overlay'}`}>
      <div className='modal-container'>
        <img src='https://i.imgur.com/yckKXj9.jpg' className='modal-img'/>
        <button className='close-modal-btn' onClick={closedModal}>
          <FaTimes /> 
        </button>
      </div>
    </div>
  )
}

export default Modal