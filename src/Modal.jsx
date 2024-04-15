import React from "react";
import { createPortal } from 'react-dom';

const Modal = ({ children }) => {
  const toolTipFooter = document.getElementById("modal-footer");
  if (toolTipFooter)
    return createPortal(
      <div className="footer">
        {children}
      </div>, toolTipFooter);

  return null;
};

export default Modal;