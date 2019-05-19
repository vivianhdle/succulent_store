import React, {Component} from 'react';
import './modal.scss'

class Modal extends Component{
    render(){
        const {isOpen,defaultAction,children,defaultActionText='Okay',secondaryAction=null,secondaryActionText='Cancel'}=this.props
        if(isOpen){
            return (
                <div className="succ-modal">
                    <div className="modal-content">
                        {children}
                        <div className="modal-actions center">
                            <button onClick={defaultAction} className="btn btn-large teal darken-2">{defaultActionText}
                            </button>
                            {secondaryAction
                                    ? <button onClick={secondaryAction} className="btn btn-large teal darken-2">{secondaryActionText}</button>
                                    :null
                            }
                        </div>
                    </div>
                </div>
            )
        }
        return null;
    }
}

export default Modal;