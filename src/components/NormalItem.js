import { Fragment } from "react";

const NormalItem = (props) => {
  return (
    <Fragment>
      <i
        class="far fa-edit text-warning mr-1 pointer"
        onClick={props.setEditingModeHandler}
        data-id={props.id}
      ></i>
      <i
        class="far fa-times-circle pointer text-warning "
        onClick={props.removeItemHandler}
        data-id={props.id}
      ></i>
      <span className="ml-2 text-break">: {props.content}</span>
    </Fragment>
  );
};

export default NormalItem;
