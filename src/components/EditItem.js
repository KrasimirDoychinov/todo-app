const EditItem = (props) => {
  return (
    <div className="row align-items-center">
      <i
        class="far fa-thumbs-up text-warning pointer fa-lg"
        data-id={props.id}
        onClick={props.editItemHandler}
      ></i>
      <input
        class="form-control col-md-8 ml-2"
        placeholder={props.content}
        onChange={props.editValueHandler}
        maxLength="40"
      />
    </div>
  );
};

export default EditItem;
