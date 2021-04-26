import { Fragment } from "react";
import { useDispatch } from "react-redux";
import { itemActions } from "../store/items";

const NormalItem = (props) => {
  let dispatch = useDispatch();
  
  const removeItemHandler = (e) => {
    let id = e.target.dataset.id;

    dispatch(itemActions.removeItem(id));
  };

  const setEditingModeHandler = (e) => {
    dispatch(itemActions.setEditingMode(e.target.dataset.id));
  };

  return (
    <Fragment>
      <i
        class="far fa-edit text-warning mr-1 pointer"
        onClick={setEditingModeHandler}
        data-id={props.id}
      ></i>
      <i
        class="far fa-times-circle pointer text-warning "
        onClick={removeItemHandler}
        data-id={props.id}
      ></i>
      <span className="ml-2 text-break">: {props.content}</span>
    </Fragment>
  );
};

export default NormalItem;
