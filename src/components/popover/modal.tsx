import React from "react";
import "./modal.less";

interface ModalProps {
  content: string;
  visible?: boolean;
  offsetLeft: number;
  offsetTop: number;
  width: number;
}

function CModal(props: ModalProps) {
  const { visible = false, offsetLeft, offsetTop, width } = props;

  return (
    visible && (
      <div className="c-popover">
        <div className="popover-content" style={{ top: `${offsetTop}px`, left: `${offsetLeft}px` }}>
          <div className="arrow" style={{ left: width / 2 + "px" }}></div>
          <div className="popover-box">
            <div>{props.content}</div>
          </div>
        </div>
      </div>
    )
  );
}

export default CModal;
