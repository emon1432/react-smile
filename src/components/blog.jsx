import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function Blog() {
  //get all data from https://jsonplaceholder.typicode.com/posts api
  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
      setData(res.data);
    });
  };

  return (
    <>
      <h1>this is Blog page</h1>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              {/* All blogs and add new blog button in two side */}
              <div className="card-header d-flex justify-content-between">
                <h3>All Blogs</h3>
                <Link to="/add-blog" className="btn btn-primary">
                  Add New Blog
                </Link>
              </div>
              {/* All blogs table */}
              <div className="card-body">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Id</th>
                      <th>Title</th>
                      <th>Body</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((item) => {
                      return (
                        <tr key={item.id}>
                          <td>{item.id}</td>
                          <td>{item.title}</td>
                          <td>{item.body}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Blog;
