import React, {Component} from 'react'


const WinModal = props => {
  const showHideClassName = props.showWinModal ? "modal display-block" : "modal display-none";

    return(
      <div id="modal" className={showHideClassName} >
        <h2>Congratulations!</h2>
        <div>You're a winner!</div>
        <div>
          <button variant="secondary" onClick={props.toggleWinModal}>
            Close
          </button>
          <button variant="primary" onClick={props.toggleWinModal}>
            Save Changes
          </button>
        </div>
      </div>
    )
}

export default WinModal
