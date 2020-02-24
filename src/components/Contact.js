import React, {Component} from 'react';
import './Contact.scss';

export default class Contact extends Component {
  constructor (props) {
    super(props)
    this.state = {
      online: false
    }
  }

  omponentDidMount(){
    this.setState({
      online: this.props.onlineStatus
    })
  }

  changeStatus = () => {
    const clicker= !this.state.online
    this.setState({
      online: clicker
    })
  }

  render(){
    return(
      <div className="Contact">
        <img src={ this.props.image } alt={ this.props.name } className="avatar"/>
        <div>
          <p className="name">{ this.props.name }</p>
          <div className="status" onClick={ this.changeStatus } >
              {
                this.state.online
                ? <div>
                    <div className="status-online"></div>
                    <p className="status-text">online</p>
                  </div>
              :   <div>
                    <div className="status-offline"></div>
                    <p className="status-text">offline</p>
                  </div>
              }
          </div>
        </div>
      </div>
    )
  }
}





