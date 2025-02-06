import { Component } from "react";

class AddComment extends Component {
  state = {
    text: "",
    rating: 1,
  };

  handleTextChange = (e) => {
    this.setState({ text: e.target.value });
  };

  handleRatingChange = (e) => {
    this.setState({ rating: e.target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const newComment = { comment: this.state.text, rate: this.state.rating, elementId: this.props.book.asin };
    await fetch(`https://striveschool-api.herokuapp.com/api/comments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2E0ZDE2NGNhMDcwNDAwMTU4YmY5NjQiLCJpYXQiOjE3Mzg4NTQ3NTYsImV4cCI6MTc0MDA2NDM1Nn0.CZpzoaBhkkBk5txI8TG_8wyQ-llqihYogOXVy1fkg4A",
      },
      body: JSON.stringify(newComment),
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="mb-3">
          <label htmlFor="commentText">Commento:</label>
          <textarea
            id="commentText"
            className="form-control"
            value={this.state.text}
            onChange={this.handleTextChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="commentRating">Voto:</label>
          <select
            id="commentRating"
            className="form-control"
            value={this.state.rating}
            onChange={this.handleRatingChange}
          >
            {[1, 2, 3, 4, 5].map((n) => (
              <option key={n} value={n}>
                {n}
              </option>
            ))}
          </select>
        </div>
        <button type="submit" className="btn btn-primary">
          Invia
        </button>
      </form>
    );
  }
}

export default AddComment;
