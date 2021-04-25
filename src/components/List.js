import { Fragment, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { itemActions } from '../store/items';
import EditItem from './EditItem';
import NormalItem from './NormalItem';
const List = () => {
  let items = useSelector((state) => state.items);
  let [editValue, setEditValue] = useState('');

  let dispatch = useDispatch();

  const removeItemHandler = (e) => {
    let id = e.target.dataset.id;

    dispatch(itemActions.removeItem(id));
  };

  const setEditingModeHandler = (e) => {
    dispatch(itemActions.setEditingMode(e.target.dataset.id));
  };

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
    <div>
      {items.length > 0 && <hr className="bg-warning" />}
      <ul class="list-group p-2">
        {items.map((x) => (
          <li
            class="list-group-item bg-dark text-white border border-dark row align-items-center"
            key={x.id}
          >
            {x.isEditing ? (
              <EditItem
                id={x.id}
                content={x.content}
                editValueHandler={editValueHandler}
                editItemHandler={editItemHandler}
              />
            ) : (
              <NormalItem
                id={x.id}
                content={x.content}
                setEditingModeHandler={setEditingModeHandler}
                removeItemHandler={removeItemHandler}
              />
            )}
          </li>
        ))}
      </ul>
      {items.length > 0 && (
        <div className="pr-5 pb-2 row justify-content-end">
          <button className="btn btn-warning font-weight-bold ">EXPORT</button>
        </div>
      )}
    </div>
  );
};

export default List;
