"use client";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  ModalFooter,
  Button,
  Input,
  Textarea,
  FormControl,
  FormLabel,
  Select,
  useToast,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import { AutoPost } from "../../../../lib/api/service";
import { FlashcardType } from "../../../../types/type";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  onCreated: (newCard: FlashcardType) => void;
};

const CreateFlashcardModal = ({ isOpen, onClose, onCreated }: Props) => {
  const toast = useToast();

  const formik = useFormik({
    initialValues: {
      front: "",
      back: "",
      subject: "",
      system: "",
      subcategory: "",
      difficulty: "", // must be from enum: Easy, Good, Hard, Again
      last_reviewed: null,
      next_review: null,
    },
    onSubmit: async (values, { resetForm }) => {
      try {
        // If empty difficulty, send null to prevent 500
        const payload = {
          ...values,
          difficulty: values.difficulty || null,
        };

        const newCard = await AutoPost<FlashcardType>("/flashcards", payload);
        onCreated(newCard);
        toast({ title: "Flashcard created!", status: "success", duration: 3000 });
        resetForm();
        onClose();
      } catch (error) {
        console.error(error);
        toast({ title: "Failed to create flashcard", status: "error", duration: 3000 });
      }
    },
  });

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Create Flashcard</ModalHeader>
        <ModalCloseButton />
        <form onSubmit={formik.handleSubmit}>
          <ModalBody>
            <FormControl mb={3} isRequired>
              <FormLabel>Front</FormLabel>
              <Textarea name="front" onChange={formik.handleChange} value={formik.values.front} />
            </FormControl>

            <FormControl mb={3} isRequired>
              <FormLabel>Back</FormLabel>
              <Textarea name="back" onChange={formik.handleChange} value={formik.values.back} />
            </FormControl>

            <FormControl mb={3}>
              <FormLabel>Subject</FormLabel>
              <Input name="subject" onChange={formik.handleChange} value={formik.values.subject} />
            </FormControl>

            <FormControl mb={3}>
              <FormLabel>System</FormLabel>
              <Input name="system" onChange={formik.handleChange} value={formik.values.system} />
            </FormControl>

            <FormControl mb={3}>
              <FormLabel>Subcategory</FormLabel>
              <Input name="subcategory" onChange={formik.handleChange} value={formik.values.subcategory} />
            </FormControl>

            <FormControl mb={3}>
              <FormLabel>Difficulty</FormLabel>
              <Select name="difficulty" onChange={formik.handleChange} value={formik.values.difficulty} placeholder="Select difficulty">
                <option value="Easy">Easy</option>
                <option value="Good">Good</option>
                <option value="Hard">Hard</option>
                <option value="Again">Again</option>
              </Select>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button type="submit" colorScheme="blue" mr={3}>
              Create
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
};

export default CreateFlashcardModal;
