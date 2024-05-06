import "../../index.css";
import React from 'react';

export class EventCategorySelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      
      <div className="">
        <label className="text-[1.6rem]">
          Select event category:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="category1">Test</option>
            <option value="category2">Homework</option>
            <option value="category3">Quiz</option>
            
          </select>
        </label>
      </div>
    );
  }
}

