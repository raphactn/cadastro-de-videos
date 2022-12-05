import { DeleteIcon } from "@chakra-ui/icons";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  IconButton,
} from "@chakra-ui/react";

interface ModalProps {
  name: string;
  onConfirm: () => void;
}
export const ConfirmationModal = ({ name, onConfirm }: ModalProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleConfirm = () => {
    onConfirm()
    onClose()
  }
  return (
    <>
      <IconButton
        aria-label={""}
        onClick={onOpen}
        icon={<DeleteIcon color="red.500" />}
      />
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Excluir {name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            Tem certeza que deseja remover este item? essa ação não podera ser
            revertida
          </ModalBody>

          <ModalFooter>
            <Button mr={3} onClick={onClose}>
              Cancelar
            </Button>
            <Button bg='#51127f' color='white' onClick={handleConfirm}>
              Excluir
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
