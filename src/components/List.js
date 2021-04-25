import { Fragment, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { itemActions } from '../store/items';
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
      content: editValue
    }

    dispatch(itemActions.editItem(editedItem));
    dispatch(itemActions.setEditingMode(e.target.dataset.id));
  }

  const editValueHandler = (e) => {
    setEditValue(e.target.value);
  }


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
              <div className="row align-items-center">
                <i class="far fa-thumbs-up text-warning pointer" data-id={x.id} onClick={editItemHandler}></i>
                <input class="form-control col-md-8 ml-2" placeholder={x.content} onChange={editValueHandler} maxLength="40"/>
              </div>
            ) : (
              <Fragment>
                <i
                  class="far fa-edit text-warning mr-1 pointer"
                  onClick={setEditingModeHandler}
                  data-id={x.id}
                ></i>
                <i
                  class="far fa-times-circle pointer text-warning "
                  onClick={removeItemHandler}
                  data-id={x.id}
                ></i>
                <span className="ml-2 text-break">: {x.content}</span>
              </Fragment>
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
