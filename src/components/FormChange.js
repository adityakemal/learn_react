import React, {Component} from 'react'



export default class FormChange extends Component {
  state = {
    kata : '...'
  }

  onChangeHandle = (e) =>{
    this.setState({
      kata : e.target.value
    })
  }

  handleSubmit = (e) =>{
    //prefent default aga page tidak merefresh ketika submit
    e.preventDefault();
    console.log('quote saved', `"${this.state.kata}"`);

  }

  render() {
    return(
      <div>
        <h3 className="p-3 bg-light text-info text-left">
          qoute : "{this.state.kata}"
        </h3>
        <form className="text-center" onSubmit={this.handleSubmit}>
          <input onChange={this.onChangeHandle} className="form-control mr-sm-2" type="text" placeholder="change quote here" />
          <button className="btn btn-success m-3 px-5" type="submit">change</button>
        </form>
      </div>

    )
  }
}
