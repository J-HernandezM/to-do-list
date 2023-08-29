import React from "react";
import { createPortal } from "react-dom";

const node = document.getElementById('modal')

function Modal({children}){
    return createPortal(
        <div className="modalBox">{children}</div>, node
    )
}

export {Modal}