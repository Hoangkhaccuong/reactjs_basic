import React, { Component } from 'react'
import axios from 'axios'
import '../Users/listuser.scss'
class ListUser extends Component {
    state = {
        listuser: [],
    }
    async componentDidMount() {
        const res = await axios.get('https://reqres.in/api/users?page=1')
        this.setState({
            listuser: res && res.data && res.data.data ? res.data.data : []
        })
    }
    render() {
        console.log('<<check state', this.state);
        const { listuser } = this.state
        return (
            <div className="list-user">
                <div className="user-title">
                    Fetch all list user
                </div>
                <div className="user-list">
                    {listuser && listuser.length > 0 &&
                        listuser.map((item, index) => {
                            return (
                            <div className="list-item" key={item.id} >
                               {index+1} {item.email}
                            </div>)

                        })

                    }


                </div>
            </div>
        )
    }
}
export default ListUser
