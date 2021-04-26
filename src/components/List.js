import { useDispatch, useSelector } from 'react-redux';
import { saveAs } from 'file-saver';

import { itemActions } from '../store/items';

import EditItem from './EditItem';
import NormalItem from './NormalItem';

const List = () => {
  let items = useSelector((state) => state.items);
  let dispatch = useDispatch();

  
  const exportHandler = (e) => {
    e.preventDefault();

    let txtContent = items.map((x, i) => `${++i}. ${x.content}\n`);

    let today = getTodaysDate();
    let blob = new Blob([txtContent.join('')], {
      type: 'text/plain;charset=utf-8',
    });

    saveAs(blob, `ToDo - ${today}.txt`);
  };

  const getTodaysDate = () => {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();

    today = mm + '/' + dd + '/' + yyyy;

    return today;
  };

  return (
    <div>
      {items.length > 0 && <hr className="bg-warning" />}
      {items.length == 0 && (
        <div className="bg-dark box d-flex align-items-center text-light"></div>
      )}
      <ul class="list-group px-1">
        {items.map((x) => (
          <li
            class="list-group-item bg-dark text-white border border-dark row align-items-center"
            key={x.id}
          >
            {x.isEditing ? (
              <EditItem id={x.id} content={x.content} />
            ) : (
              <NormalItem
                id={x.id}
                content={x.content}
              />
            )}
          </li>
        ))}
      </ul>
      {items.length > 0 && (
        <div className="pr-2 pb-2 row justify-content-end">
          <button
            className="btn btn-warning font-weight-bold"
            onClick={exportHandler}
          >
            EXPORT
          </button>
        </div>
      )}
    </div>
  );
};

export default List;
