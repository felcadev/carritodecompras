import React from 'react'

const Modal = React.memo(({title, bodyText, handleEvent}) => {

    return (
        <>
            <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">{title}</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            {bodyText}
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-success" data-dismiss="modal">Cerrar</button>
                            <button type="button" className="btn btn-danger" onClick={handleEvent} data-dismiss="modal">Eliminar</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
})

export default Modal;