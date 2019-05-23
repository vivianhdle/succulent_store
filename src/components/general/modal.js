import React, {Component} from 'react';
import './modal.scss'

class Modal extends Component{
    render(){
        const {isOpen,defaultAction,children,defaultActionText,secondaryAction=null,secondaryActionText='Cancel'}=this.props
        if(isOpen){
            return (
                <div className="succ-modal">
                    <div className="modal-content">
                        {children}
                        <div className="modal-actions center">
                            {defaultActionText && <button onClick={defaultAction} className="btn green lighten-1">{defaultActionText}
                            </button>}
                            {secondaryAction
                                    ? <button onClick={secondaryAction} className="btn orange lighten-1">{secondaryActionText}</button>
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