import SingleComment from "./SingleComment";

const CommentsList = (props) => {
  console.log(CommentsList);
  return (
    <div>
      {props.comments.map((comment) => (
        <SingleComment key={comment.asin} comment={comment} />
      ))}
    </div>
  );
};

export default CommentsList;
