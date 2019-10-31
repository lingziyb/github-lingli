import React, { useEffect, useRef, useState } from "react";
import "./modal.less";

interface IPlace {
  top: number;
  left: number;
  width: number;
  height: number;
  x: number;
  y: number;
}

interface ModalProps {
  content: string;
  place: IPlace;
  onClose(): void;
}

interface IModalPosition {
  modelLeft: number;
  modelTop: number;
}

function CModal(props: ModalProps) {
  const { place, onClose } = props;
  const { top, left, width, height, x, y } = place;
  const popoverRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState<IModalPosition>({ modelLeft: 0, modelTop: 0 });
  const [arrowHeight] = useState(5);
  const [isShowTop, setIsShowTop] = useState(false);

  useEffect(() => {
    if (popoverRef.current) {
      const { clientWidth: popoverCW, clientHeight: popoverCH } = popoverRef.current;

      if (y > popoverCH) {
        // 显示在上方
        setIsShowTop(true);
        setPosition({
          modelTop: top - arrowHeight - 5,
          modelLeft: left
        });
      } else {
        // 显示在下方
        setIsShowTop(false);
        setPosition({
          modelTop: top + arrowHeight + 5 + height + popoverCH,
          modelLeft: left
        });
      }
    }
  }, []);

  return (
    <div className="c-popover">
      <div className="mask" onMouseDown={onClose} />
      <div className="popover-content" ref={popoverRef} style={{ top: position.modelTop, left: position.modelLeft }}>
        <div className={`arrow ${isShowTop ? "bot" : "top"}`} style={{ left: width / 2 + "px" }}></div>
        <div className="popover-box">
          <div>{props.content}</div>
        </div>
      </div>
    </div>
  );
}

export default CModal;
