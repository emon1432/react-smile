function AddBlog() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">
              <h3>Add New Blog</h3>
            </div>
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label htmlFor="title">Title</label>
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    placeholder="Enter Title"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="body">Body</label>
                  <textarea
                    className="form-control"
                    id="body"
                    rows="3"
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary mt-3">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddBlog;
