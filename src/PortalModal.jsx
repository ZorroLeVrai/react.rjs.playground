import React from "react";
import { createPortal } from 'react-dom';

// Uses a portal to display the element in the right space
const PortalModal = ({ children }) => {
  const toolTipFooter = document.getElementById("modal-footer");
  if (toolTipFooter)
    return createPortal(
      <div className="footer">
        {children}
      </div>, toolTipFooter);

  return null;
};

export default PortalModal;