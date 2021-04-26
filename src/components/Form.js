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
    <div className="d-flex justify-content-center">
      <form className="bg-dark p-2 rounded" onSubmit={onSubmitHandler}>
        <div className="row">
          <input
            placeholder="Todo..."
            onChange={onChangeHandler}
            value={content}
            maxlength="150"
          />
          <button
            type="submit"
            class="btn btn-warning font-weight-bold ml-1"
          >
            ADD
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
