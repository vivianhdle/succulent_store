import React from 'react';
import Modal from './modal';
import './delete_confirmation.scss';

function DeleteConfirmation(props){
    const {handleDelete,isOpen,closeModal}=props;
    if (isOpen){
        return(
            <Modal isOpen={isOpen}>
                <div className="confirm-icon center">
                    <div className="icon-text center">
                        <i className="material-icons">delete_forever</i>
                    </div>
                </div>
                <div className="confirm-text center row">
                    <div className="col s10 offset-s1">Are you sure you want to remove this item from your cart?</div>
                </div>
                <div className="confirm-btns center row">
                    <div className="col s10 offset-s1">
                        <button onClick={handleDelete} className="btn btn-large green lighten-1">YES</button>
                        <button onClick={closeModal} className="btn btn-large red lighten-1">NO</button>
                    </div>
                </div>
            </Modal>
        )
    }else {
        return null;
    }
}




export default DeleteConfirmation