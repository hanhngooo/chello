import React, { useState } from "react";
import Icon from "@material-ui/core/Icon";
import Card from "@material-ui/core/Card";
import TextareaAutosize from "react-textarea-autosize";
const styles = {
  buttonGroup: {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    borderRadius: 3,
    height: 36,
    width: 272,
    paddingLeft: 10,
  },
};
export default function ActionButton({ list }) {
  const [openForm, setOpenForm] = useState(false);
  const buttonText = list ? "Add another list" : "Add another card";
  const buttonTextOpacity = list ? 1 : 0.5;
  const buttonTextColor = list ? "white" : "inherit";
  const buttonBackground = list ? "rgba(0,0,0,0.15)" : "inherit";
  const closeForm = () => setOpenForm(false);
  const AddButton = () => {
    return (
      <div
        style={{
          ...styles.buttonGroup,
          opacity: buttonTextOpacity,
          color: buttonTextColor,
          backgroundColor: buttonBackground,
        }}
        onClick={() => setOpenForm(true)}
      >
        <Icon>add</Icon>
        <p>{buttonText}</p>
      </div>
    );
  };
  const Form = ({ list }) => {
    const placeHolder = list ? "Enter list title..." : "Enter card title...";
    const buttonTiel = list ? "Add List" : "Add Card";
    return (
      <div>
        <Card>
          <TextareaAutosize
            placeholder={placeHolder}
            autoFocus
            onBlur={closeForm}
          />
        </Card>
      </div>
    );
  };
  return <> {openForm ? <Form /> : <AddButton />}</>;
}
