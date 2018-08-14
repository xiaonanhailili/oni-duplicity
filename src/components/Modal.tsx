import * as React from "react";

import ReactModal from "react-modal";

import styled, {
  border,
  Border,
  Color,
  getThemeColor,
  getThemeSpace,
  Space
} from "@/style";

const ModalAdapter: React.SFC<ReactModal.Props> = ({
  className,
  children,
  ...props
}) => {
  const contentClassName = `${className}__content`;
  const overlayClassName = `${className}__overlay`;
  return (
    <ReactModal
      portalClassName={className as string}
      className={contentClassName}
      overlayClassName={overlayClassName}
      {...props}
    >
      <div className={`${className}__innercontent`}>{children}</div>
    </ReactModal>
  );
};

const Modal = styled(ModalAdapter)`
  &__overlay {
    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    background-color: rgba(0, 0, 0, 0.45);
  }

  &__content {
    position: absolute;
    top: 40px;
    left: 40px;
    right: 40px;
    bottom: 40px;
    outline: none;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__innercontent {
    display: inline-block;
    padding: ${getThemeSpace(Space.Large)}px;
    min-width: 400px;
    min-height: 300px;
    text-align: left;
    ${border.of(Border.Thick, Color.SecondaryIntent)};
    background-color: ${getThemeColor(Color.PanelBackground)};
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }
`;
Modal.displayName = "Modal";
export default Modal;
