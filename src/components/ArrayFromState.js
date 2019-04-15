import React, {Component} from 'react'

export default class ArrayFromState extends Component {
  render() {

    console.log(this.props.data);
    const {data} = this.props;


    const DataList = data.map((data) => {
      return (
        <div className="text-warning">
          <p>
            framework : {data.framework} is {data.language} language
          </p>
        </div>
      )
    })
    return(
      <div className =" px-3 mt-3">
      <h4>taking Array from state example down below</h4>
        {DataList.length !== 0 ? DataList : (<div>data kosong bro</div>) }
      </div>
    )
  }
}
