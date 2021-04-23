import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Icon from "@material-ui/core/Icon";
import Card from "@material-ui/core/Card";
import TextareaAutosize from "react-textarea-autosize";
import Button from "@material-ui/core/Button";
import { addListSuccess, addCardSuccess } from "../store/lists/actions";

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
  formButtonGroupd: {
    marginTop: 8,
    display: "flex",
    alignItems: "center",
  },
};
export default function ActionButton({ list, listId }) {
  const [openForm, setOpenForm] = useState(false);
  const buttonText = list ? "Add another list" : "Add another card";
  const buttonTextOpacity = list ? 1 : 0.5;
  const buttonTextColor = list ? "white" : "inherit";
  const buttonBackground = list ? "rgba(0,0,0,0.15)" : "inherit";
  const dispatch = useDispatch();

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

  const Form = () => {
    const [input, setInput] = useState("");
    const handleInputChange = (e) => {
      setInput(e.target.value);
    };
    const handleAddList = () => {
      if (input) {
        dispatch(addListSuccess(input));
      }
      setInput("");
    };
    const handleAddCard = () => {
      if (input) {
        dispatch(addCardSuccess(input, listId));
      }
      setInput("");
    };

    const placeHolder = list ? "Enter list title..." : "Enter card title...";
    const buttonTitle = list ? "ADD LIST" : "ADD CARD";

    return (
      <div>
        <Card
          style={{
            minHeight: 80,
            minWidth: 272,
            padding: "6px 8px 2px",
          }}
        >
          <TextareaAutosize
            placeholder={placeHolder}
            autoFocus
            onBlur={closeForm}
            value={input}
            onChange={(e) => handleInputChange(e)}
            style={{
              resize: "none",
              width: "100%",
              outline: "none",
              border: "none",
              overflow: "hidden",
            }}
          />
        </Card>
        <div style={styles.formButtonGroupd}>
          <Button
            variant="contained"
            style={{ color: "white", backgroundColor: "orange" }}
            onMouseDown={list ? handleAddList : handleAddCard}
          >
            {buttonTitle}
          </Button>
          <Icon style={{ marginLeft: 8, cursor: "pointer" }}>close</Icon>
        </div>
      </div>
    );
  };
  return <> {openForm ? <Form /> : <AddButton />}</>;
}
