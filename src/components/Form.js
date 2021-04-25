import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { itemActions } from '../store/items';

const Form = () => {
  let [content, setContent] = useState('');

  let dispatch = useDispatch();

  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (!content.trim() != '') {
      return alert("The content musn't be empty");
    }

    dispatch(itemActions.addItem(content));
    setContent('');
  };

  const onChangeHandler = (e) => {
    setContent(e.target.value);
  };

  return (
    <div className="pr-4 pl-4">
      <form className=" bg-dark p-2 rounded" onSubmit={onSubmitHandler}>
        <div className="row">
          <input
            class="form-control col-md-9 mr-2"
            placeholder="Todo..."
            onChange={onChangeHandler}
            value={content}
            maxlength="40"
          />
          <button
            type="submit"
            class="btn btn-warning font-weight-bold col-md-2"
          >
            ADD
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
