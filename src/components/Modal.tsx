import React from "react";
import { Modal as AntdModal } from "antd";
import { ModalProps as AntdModalProps } from "antd/lib/modal";
interface ModalProps extends AntdModalProps {
  children: React.ReactNode;
  visible?: boolean;
  title?: string;
  handleOk?: (e: React.MouseEvent<HTMLElement>) => void;
  handleCancel?: (e: React.MouseEvent<HTMLElement>) => void;
}
export const Modal = (props: ModalProps) => {
  const { children, visible, title, handleOk, handleCancel } = props;
  return (
    <AntdModal
      title={title}
      visible={visible}
      onOk={handleOk}
      onCancel={handleCancel}>
      {children}
    </AntdModal>
  );
};
