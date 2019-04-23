import React, {Component} from 'react'

export default class Hpsc extends Component{
    state ={
        name: 'kemal ',
        dataList : this.props.list,
        handleClick : ()=> alert('halo im already in state btw'),
        handleClickParam : (val,e)=> {
            alert(val)
            e.preventDefault()
        }
    }
    rubahData = ()=>{
        this.setState({
            name : 'ashiap!!'
        })
    }
    render(){
        return (
        <div>
            <br />
            <h1>this is class contain state variable who can get and keep the props</h1>
            <h3 className='text-info'>

            {this.state.name}
            </h3>
            {this.state.dataList}
            <a href='/' onClick={this.state.handleClick}>click me!</a> <br />
            <a href='/' onClick={(e) =>this.state.handleClickParam('no reload',e)}> im function with param click me too!</a>
            <button onClick={this.rubahData}>rubah nama</button>
            </div>
        )
    }

}