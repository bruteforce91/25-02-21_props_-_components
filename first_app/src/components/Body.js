import React from "react";
import '../assets/css/body.css'

class Body extends React.Component {
  //props ci sono
  render() {
    return (
        <main className="body">
            <div>
                <img src={this.props.cover} alt="body"/>
                <h3>{this.props.title}</h3>
                <p>{this.props.descr}</p>
            </div>
        </main>
    );
  }
}
export default Body;

