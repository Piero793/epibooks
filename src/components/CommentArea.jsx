import { Component } from "react";
import CommentsList from "./CommentList";
import AddComment from "./AddComment";

class CommentArea extends Component {
  state = {
    comments: [],
  };

  componentDidMount() {
    console.log("Component did mount, fetching comments...");
    this.fetchComments();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.bookId !== this.props.bookId) {
      console.log("Component did update, bookId has changed, fetching comments...");
      this.fetchComments();
    }
  }

  fetchComments = async () => {
    console.log(`Fetching comments for bookId: ${this.props.bookId}`);
    const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${this.props.bookId}`, {
      headers: {
        Authorization:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2E0ZDE2NGNhMDcwNDAwMTU4YmY5NjQiLCJpYXQiOjE3Mzg4NTQ3NTYsImV4cCI6MTc0MDA2NDM1Nn0.CZpzoaBhkkBk5txI8TG_8wyQ-llqihYogOXVy1fkg4A",
      },
    });
    const data = await response.json();
    console.log("Comments fetched:", data);
    this.setState({ comments: data });
  };

  render() {
    console.log("Rendering CommentArea with comments:", this.state.comments);
    return (
      <div>
        <CommentsList comments={this.state.comments} />
        <AddComment bookId={this.props.bookId} />
      </div>
    );
  }
}

export default CommentArea;
