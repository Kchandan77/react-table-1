import React, { Component } from 'react'
// import axios from 'axios'
import ReactTable from "react-table";
import 'react-table/react-table.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: [],
      // loading: true
      // items:[],
      // isloaded:false
    }
  }
  // async getUsersData() {
  //   const res = await axios.get('https://walkwel.herokuapp.com/')
  //   console.log(res)
  //   .then(res =>res.json())
  //   .then(users =>{
  //     this.setState({users:users})
  //   })
  //   // this.setState({ loading: false, users: res.data})
  //   // console.log(res.data.conversations)
  // }
  // componentDidMount() {
  //   // this.getUsersData()
  //   // fetch('https://walkwel.herokuapp.com/')
  //   // .then(res=> res.json())
  //   //   .then(json =>{
  //   //     this.setState({
  //   //       isloaded:true,
  //   //       items:json,
  //   //     })
  //   //   })
  //   }
  componentDidMount() {
    const url = "https://walkwel.herokuapp.com/";

    fetch(url, {
      method: 'GET',
    }).then(response => response.json()).then(posts => {
      console.log(posts)
      this.setState({ posts: posts.conversions })
    })
  }

  render() {
    const data = this.state.posts;
    const columns = [
      {
        Header: 'First Name',
        accessor: 'firstName',
      }
      , {
        Header: 'Last Name',
        accessor: 'lastName',
      }

      , {
        Header: 'Email',
        accessor: 'email',
      }
      , {
        Header: 'DOB',
        accessor: 'dob',
      },
      {
        Header: 'Address',
        accessor: 'address',
      },
      {
        Header: 'City',
        accessor: 'city',
      },
      {
        Header: 'Gender',
        accessor: 'gender',
      },
      {
        Header: 'IQ',
        accessor: 'iq',
      }
    ]
    return (
      <div>
        <ReactTable
          className="-striped -highlight"
          data={data}
          filterable
          columns={columns}
          defaultPageSize={10}>

        </ReactTable>

      </div>
    )
  }
}

export default App;