import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import { MailOutlined } from '@ant-design/icons';
import styled from "styled-components";

const Wrapper = styled.div`
    .popOverTitle{
      display: flex;
      flex-direction: row;
      align-items: center;
    }
`;
const EmailPopOver = ({ visible, toggleModal }) => {
  return <Modal
    isOpen={visible}
    title="Modal"
    visible={visible}
    toggle={toggleModal}
    okText="确认"
    cancelText="取消"
    centered={true}
  >
    <ModalHeader toggle={toggleModal}>Modal title</ModalHeader>
    <ModalBody>
      <div className="popOverTitle">
        <MailOutlined />
        <h3>Create an email</h3>
      </div>
    </ModalBody>
    <ModalFooter>
      <Button color="primary" onClick={toggleModal}>Do Something</Button>{' '}
      <Button color="secondary" onClick={toggleModal}>Cancel</Button>
    </ModalFooter>
  </Modal>
}

const EmailTab = () => {
  const [flags, setFlags] = useState({
    popOverVisible: true
  });
  const toggleModal = () => {
    setFlags({
      ...flags,
      popOverVisible: !flags.popOverVisible
    });
  }
  return (
    <Wrapper>
      <EmailPopOver visible={flags.popOverVisible}
        toggleModal={toggleModal}
      />
      Email Tab
        </Wrapper>
  );
}
export default EmailTab;
