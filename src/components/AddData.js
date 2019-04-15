import React, {Component} from 'react'

class AddData extends Component {
  state = {
    framework : null,
    language : null,
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id] : e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    // console.log(this.state);
    this.props.addData(this.state)
  }

  render() {
    return(
      <div>
      <h1>Add Data with Form</h1>
      <form onSubmit={this.handleSubmit}>
        <div class="form-group">
          <label htmlFor="framework">framework</label>
          <input type="text" class="form-control" id="framework" onChange={this.handleChange} placeholder="" />
        </div>
        <div class="form-group">
          <label htmlFor="language">language</label>
          <input type="text" class="form-control" id="language" onChange={this.handleChange} placeholder="" />
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
      </div>

    )

  }
}

export default AddData
