import React, { Component } from 'react';
import Todos from './Todos.js'
import Footer from './Footer.js'
import Header from './Header.js'
import Images from './Images.js'
import FormChange from './FormChange.js'
import PageProps from './PageProps.js'
import ArrayFromState from './ArrayFromState.js'
import AddData from './AddData.js'

class App extends Component {
  state = {
    todos: [
      {id : 1, content : 'nabung'},
      {id : 2, content : 'beli buku'},
      {id : 3, content : 'kerja'},
      {id : 4, content : 'umroh'},
    ],
    user : {
      name: 'kemal',
      age : 26
    },
    data: [
      {framework : 'NodeJS', language : 'JavaScript'},
      {framework : 'SailJS', language : 'JavaScript'},
      {framework : 'React', language : 'JavaScript'},
      {framework : 'ROR', language : 'Ruby'},
      {framework : 'Django', language : 'Python'},
      {framework : 'Laravel', language : 'PHP'},
    ]
  }

  deleteTodo = id =>{
    const todos = this.state.todos.filter((tod)=>{ return tod.id !== id})
    this.setState({
      todos
    })
  }
  //functions
  //hover
  handleMouseOver = (e) =>{
    console.log(e.target);
    console.log(this.state.todos);
  }
  //click
  changeAge = (e)=>{
    console.log(this.state.user);
    this.setState({
      user : {
        name : this.state.user.name,
        age : this.state.user.age +1
      }
    })
  }
  //copy
  alertCopy = () =>{
    alert('F U C K Y O U !')
  }
  //change array ArrayFromState to JavaScript languange only
  onlyJs = (e)=>{
    console.log('wow');
    const data = this.state.data.filter((dat)=>{ return dat.language === "JavaScript"})
    this.setState({
      data
    })
  }

  addData = (data) =>{
    // console.log(data);
    let datas = [...this.state.data, data]
    console.log(datas);
    this.setState({
      data : datas
    })
  }

  render() {
    return (
      <div className="App container">
        <Header />
      <h1 className="text-center" onMouseOver ={this.handleMouseOver} >Todo list</h1>
        <Todos  todos={this.state.todos} deleteTodo={this.deleteTodo}/>
        <h3 className="p-3 text-center">
         im {this.state.user.name} <br/>
         my age is {this.state.user.age}
        </h3>
        <button className="btn btn-info w-100" onClick={this.changeAge} type="submit">Change my age</button>
        <h3 className="p-3 text-center text-warning" onCopy={this.alertCopy}>
          don't even try to copy me !
        </h3>
        <h3 className="p-3 text-center text-danger" >
          galery
        </h3>
        <div className="">
          <Images linknya ='https://media.travelingyuk.com/wp-content/uploads/2018/03/Rekomendasi-Empat-Nasi-Padang-Enak-Si-Makanan-Sejuta-Umat-di-Malang-cover.jpg' ukuran='200px' />
          <Images linknya ='https://media.travelingyuk.com/wp-content/uploads/2018/03/Rekomendasi-Empat-Nasi-Padang-Enak-Si-Makanan-Sejuta-Umat-di-Malang-cover.jpg' ukuran='300px' />
          <Images linknya ='https://media.travelingyuk.com/wp-content/uploads/2018/03/Rekomendasi-Empat-Nasi-Padang-Enak-Si-Makanan-Sejuta-Umat-di-Malang-cover.jpg' ukuran='400px' />
          <Images linknya ='https://media.travelingyuk.com/wp-content/uploads/2018/03/Rekomendasi-Empat-Nasi-Padang-Enak-Si-Makanan-Sejuta-Umat-di-Malang-cover.jpg' ukuran='500px' />
          <Images linknya ='https://media.travelingyuk.com/wp-content/uploads/2018/03/Rekomendasi-Empat-Nasi-Padang-Enak-Si-Makanan-Sejuta-Umat-di-Malang-cover.jpg' ukuran='600px' />
        </div>
        <FormChange />
        <PageProps carname="lambo" speed="2000km/h" color="black and yellow" />
        <ArrayFromState data={this.state.data} />
        <button className="btn btn-info mx-3" onClick={this.onlyJs} type="button">JavaScript only</button>
        <AddData addData={this.addData} />
        <Footer />
      </div>
    );
  }
}

export default App;
