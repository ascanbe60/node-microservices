import React, { useState } from 'react';
import axios from 'axios';

if (module.hot) {
  module.hot.accept();
}

const CreatePost = () => {
  const [title, setTitle ] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();

    await axios.post('http://localhost:4000/posts', {
      title,
    });
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input
            value={title}
            onChange={e => setTitle(e.target.value)}
            className="form-control"
          />
        </div>
        <button
          className="btn btn-primary"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreatePost;