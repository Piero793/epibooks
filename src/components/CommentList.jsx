import SingleComment from "./SingleComment";

const CommentsList = (props) => {
  return (
    <div>
      {props.comments.map((comment) => (
        <SingleComment key={comment.id} comment={comment} />
      ))}
    </div>
  );
};

export default CommentsList;
