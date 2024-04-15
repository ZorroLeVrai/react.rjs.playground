import React, { useState } from 'react'
import { createPortal } from 'react-dom';
import Modal from '../Modal';

const withToolTip = (Component, toolTipText) => {
  const EnhanceComponent = (props) => {
    const [showTooltip, setShowTooltip] = useState(false);
    const toolTipContent = toolTipText ?? "Some tooltip";
    const mouseOver = () => setShowTooltip(true);
    const mouseOut = () => setShowTooltip(false);
    return (
      <>
        <span onMouseOver={mouseOver} onMouseOut={mouseOut}>
          <Component {...props} />
        </span>
        {showTooltip &&
          <div className="tooltip">
            <span className="tooltiptext">{toolTipContent}</span>
          </div>
        }
        {showTooltip && <Modal>{toolTipContent}</Modal>}
      </>
    );    
  };

  return EnhanceComponent;
}

export default withToolTip;