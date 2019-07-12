import React, {Component} from 'react'


const Modal = props => {
  const showHideClassName = props.showModal ? "modal display-block" : "modal display-none";

    return(
      <div id="modal" className={showHideClassName} >
        <h2>Game Over</h2>
        <div>Woohoo, you're reading this text in a modal!</div>
        <div>
          <button variant="secondary" onClick={props.toggleModal}>
            Close
          </button>
          <button variant="primary" onClick={props.toggleModal}>
            Save Changes
          </button>
        </div>
      </div>
    )
}

export default Modal
