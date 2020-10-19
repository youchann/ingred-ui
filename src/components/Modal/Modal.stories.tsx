import * as React from "react";
import styled from "styled-components";
import Modal from "./Modal";
import Button from "../Button";
import Fade from "../Fade";
import Typography from "../Typography";

const ModalContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 50vw;
  height: 50vh;
  transform: translate(-50%, -50%);
  border-radius: ${({ theme }) => theme.radius}px;
  background-color: ${({ theme }) => theme.palette.background.default};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default {
  title: "Modal",
  component: Modal,
};

export const Overview: React.FunctionComponent = () => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  const onHandleToggleOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Button onClick={onHandleToggleOpen}>Toggle Show Modal</Button>
      <Modal isOpen={isOpen} onClose={onHandleToggleOpen}>
        <Fade in={isOpen}>
          <ModalContainer>
            <Typography>This is Modal.</Typography>
            <Button inline={true} onClick={onHandleToggleOpen}>
              Close
            </Button>
          </ModalContainer>
        </Fade>
      </Modal>
    </>
  );
};