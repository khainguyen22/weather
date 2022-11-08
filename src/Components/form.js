import React from "react";
function Form() {
    return (
      <form onSubmit={this.props.loadWeather}>
        <input
          type="text"
          name="city"
          placeholder="City..."
          defaultValue={"Thai nguyen"}
        />
        <button>Get Weather</button>
      </form>
    );
  }
export default Form;