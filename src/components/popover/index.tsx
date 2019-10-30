import React, { useCallback, useState, ReactElement, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import "./index.less";
import CModal from "./modal";

interface PopoverProps {
  title?: string;
  content: string;
  trigger: string;
  children: ReactElement;
}

let popoverRoot: HTMLElement;

export default function Popover(props: PopoverProps) {
  const { children } = props;

  const [visible, setVisible] = useState(false);
  const modalRef = useRef<HTMLElement>(null);
  const [offsetTop, setOffsetTop] = useState(0);
  const [offsetLeft, setOffsetLeft] = useState(0);

  useEffect(() => {
    function handle() {
      setVisible(false);
    }
    document.body.addEventListener("click", handle, false);
    return () => {
      document.body.removeEventListener("click", handle, false);
    };
  }, []);

  const createPopover = useCallback(() => {
    if (popoverRoot) {
      return popoverRoot;
    }

    popoverRoot = document.createElement("div");
    popoverRoot.style.cssText = ` position: absolute; width: 100%; top: 0; left: 0;`;

    document.body.append(popoverRoot);
  }, []);

  const changeChildren = useCallback(() => {
    const newElement = React.cloneElement(children, {
      onClick: () => {
        createPopover();
        setVisible(visible => !visible);
        if (modalRef.current) {
          setOffsetTop(modalRef.current.offsetTop);
          setOffsetLeft(modalRef.current.offsetLeft);
        }
      },
      ref: modalRef
    });
    return newElement;
  }, []);

  return (
    <>
      {changeChildren()}
      {visible &&
        createPortal(
          <CModal
            content={props.content}
            visible={visible}
            offsetLeft={offsetLeft}
            offsetTop={offsetTop}
            width={children.props.style && children.props.style.width.split("px")[0]}
          />,
          popoverRoot
        )}
    </>
  );
}
