import React, { useEffect, useState } from "react";
import { Button, FormControl, FormLabel, Stack } from "@chakra-ui/react";

const initialValue = {
  name: "",
  email: "",
  id: "",
};
const ContactForm = ({
  onClose,
  editableContact,
  setEditableContact,
  addContact,
  updateContact,
}) => {
  const [editContact, setEditContact] = useState(editableContact);
  const [contact, setContact] = useState(initialValue);

  function handleChange(e) {
    setContact({ ...contact, [e.target.name]: e.target.value });
  }
  function handleSubmit(e) {
    if (editableContact) {
      updateContact(contact);
      setEditableContact(null);
      alert("Contact Successfully updated!");
    } else {
      console.log("Submitting");
      addContact(contact);
      setContact(initialValue);
    }
    onClose();
  }

  useEffect(() => {
    if (editableContact) setContact(editContact);
  }, [editableContact]);
  return (
    <div>
      <Stack
        id="Contact Form"
        bg=" #B931FC"
        w="calc(50%/1.87)"
        m="auto"
        borderRadius="10%"
      >
        <FormControl className="FormControl">
          <FormLabel>Name</FormLabel>
          <input
            onChange={handleChange}
            name="name"
            type="text"
            value={contact.name}
          />
        </FormControl>
        <FormControl className="FormControl">
          <FormLabel>email address</FormLabel>
          <input
            onChange={handleChange}
            name="email"
            type="email"
            value={contact.email}
          />
        </FormControl>
        <Button
          onClick={handleSubmit}
          cursor="pointer"
          type="submit"
          bg="blue"
          color="white"
          borderRadius="10%"
          alignSelf="flex-end"
        >
          {editableContact ? "Edit" : "Add"}Contact
        </Button>
      </Stack>
    </div>
  );
};

export default ContactForm;
