import React, { Component } from "react";

class Jumbotron extends Component {
  render() {
    return (
      <div>
        <section className="home-section--1">
          <div className="container">
            <div className="row">
              <div className="col col-sm-12 col-md-5">
                <div className="pt-4 mt-4">
                  <h1>React for Rails developers</h1>
                  <p>Supercharge your RoR Apps with React.js</p>
                </div>
              </div>
              <div className="col col-sm-12 col-md-7">
                <div className="pt-4 mt-4 text-center">
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/6ACq2QXgGDI"
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen=""
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Jumbotron;
