import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { itemActions } from '../store/items';

const EditItem = (props) => {
  
  let [editValue, setEditValue] = useState(props.content);
  let dispatch = useDispatch();

  const editItemHandler = (e) => {
    let id = e.target.dataset.id;

    let editedItem = {
      id,
      content: editValue,
    };

    dispatch(itemActions.editItem(editedItem));
    dispatch(itemActions.setEditingMode(e.target.dataset.id));
  };

  const editValueHandler = (e) => {
    setEditValue(e.target.value);
  };             

  
  return (
    <div className="row align-items-center">
      <i
        class="far fa-thumbs-up text-warning pointer"
        data-id={props.id}
        onClick={editItemHandler}
      ></i>
      <input
        class="form-control col-md-8 ml-2"
        value={editValue}
        onChange={editValueHandler}
        maxLength="40"
      />
    </div>
  );
};

export default EditItem;
