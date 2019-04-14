import React, {Component} from 'react'

class Images extends Component {
  render() {
    return(
      <div>
        <img src={this.props.linknya} width={this.props.ukuran} class="rounded mx-auto d-block my-2" alt="..." />

      </div>
    )
  }
}

export default Images
