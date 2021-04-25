import { useDispatch, useSelector } from "react-redux";
import { itemActions } from "../store/items";

const List = () => {
  let items = useSelector((state) => state.items);
  let dispatch = useDispatch();

  const removeItemHandler = (e) => {
    let id = e.target.dataset.id;

    dispatch(itemActions.removeItem(id));
  };

  const editItemHandler = (e) => {
    let id = e.target.dataset.id;

    
  };

  return (
    <div>
      <ul class="list-group p-2">
        {items.map((x) => (
          <li
            class="list-group-item bg-dark text-white border border-dark row"
            key={x.id}
          >
            <i
              class="far fa-edit text-warning mr-1 pointer"
              onClick={editItemHandler}
              data-id={x.id}
            ></i>
            <i
              class="far fa-times-circle pointer text-warning "
              onClick={removeItemHandler}
              data-id={x.id}
            ></i>
            <span className="ml-2 text-break">: {x.content}</span>
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
