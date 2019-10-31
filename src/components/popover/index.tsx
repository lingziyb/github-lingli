import React, { ReactElement, useCallback, useRef, useState, useMemo, useEffect } from "react";
import { createPortal } from "react-dom";
import "./index.less";
import CModal from "./modal";

interface PopoverProps {
  title?: string;
  content: string;
  trigger: string;
  children: ReactElement;
}

interface IPlace {
  top: number;
  left: number;
  width: number;
  height: number;
  x: number;
  y: number;
}

let popoverRoot: HTMLElement;

export default function Popover(props: PopoverProps) {
  const { children } = props;
  const [visible, setVisible] = useState(false);
  const childRef = useRef<HTMLElement>(null);
  const [place, setPlace] = useState<IPlace>({ top: 0, left: 0, width: 0, height: 0, x: 0, y: 0 });

  const onClose = useCallback(() => {
    setVisible(false);
  }, []);

  /** 创建一个popover元素，挂载到body上。 */
  const createPopover = useCallback(() => {
    if (popoverRoot) {
      return popoverRoot;
    }

    popoverRoot = document.createElement("div");
    popoverRoot.style.cssText = `position: absolute; width: 100%; top: 0; left: 0;`;

    document.body.append(popoverRoot);
  }, []);

  useEffect(() => {}, []);

  /** 包在popover里的孩子元素 */
  const newElement = React.cloneElement(children, {
    onClick() {
      createPopover();
      setVisible(visible => !visible);
      if (childRef.current) {
        const { offsetTop: top } = childRef.current;
        const { left, width, height, x, y } = childRef.current.getBoundingClientRect();

        setPlace({ top, left, width, height, x, y });
      }
    },
    ref: childRef
  });

  return (
    <>
      {newElement}
      {visible && createPortal(<CModal onClose={onClose} content={props.content} place={place} />, popoverRoot)}
    </>
  );
}
