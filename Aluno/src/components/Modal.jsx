import React, {useState}  from "react";


const ModalAluno = () => {

    return (
        <ReactModal 
           isOpen={this.state.showModal}
           contentLabel="Minimal Modal Example"
        >
          <button onClick={this.handleCloseModal}>Close Modal</button>
        </ReactModal>
    )
    

}

export default ModalAluno;