import React from 'react';

function Toast({ show, message}) {
    return (
        show && (
            <div 
                className="position-fixed bottom-0 end-0 p-3"
                style={{ zIndex: 1055 }}
            >
                <div className="toast show bg-success text-white">
                    <div className="toast-body">{message}</div>
                </div>
            </div>
        )
    );
}

export default Toast;