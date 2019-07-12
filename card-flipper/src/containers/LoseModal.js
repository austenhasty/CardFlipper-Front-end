import React, {Component} from 'react'


const LoseModal = props => {
  const showHideClassName = props.showLoseModal ? "modal display-block" : "modal display-none";

    return(
      <div id="modal" className={showHideClassName} >
        <h2>WoW... You're the worst!</h2>
        <div>You are one pathetic loser!</div>
        <div>
          <button variant="secondary" onClick={props.toggleLoseModal}>
            Close
          </button>
          <button variant="primary" onClick={props.toggleLoseModal}>
            Save Changes
          </button>
        </div>
      </div>
    )
}

export default LoseModal
