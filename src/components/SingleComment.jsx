const SingleComment = (props) => {
  return (
    <div className="mb-3">
      <h5>{props.comment.author}</h5>
      <p>{props.comment.text}</p>
      <small>Voto: {props.comment.rating}</small>
    </div>
  );
};

export default SingleComment;
