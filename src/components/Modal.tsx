import React, { useCallback } from "react";
import { Modal as AntdModal, Form } from "antd";
import { ModalProps as AntdModalProps } from "antd/lib/modal";
interface ModalProps extends AntdModalProps {
  children: React.ReactNode;
  visible?: boolean;
  title?: string;
  handleOk?: (e: React.MouseEvent<HTMLElement>) => void;
  handleCancel?: (e: React.MouseEvent<HTMLElement>) => void;
}
export const Modal = Form.create<any>({ name: "form_in_modal" })(
  (props: any) => {
    const { children, visible, title, handleCancel, form, handleOk } = props;
    const handleOkAction = useCallback(() => {
      handleOk(form);
    }, []);
    return (
      <AntdModal
        title={title}
        visible={visible}
        onOk={handleOkAction}
        onCancel={handleCancel}>
        {React.cloneElement(children, { form })}
      </AntdModal>
    );
  }
);
