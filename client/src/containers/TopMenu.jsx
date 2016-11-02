import React from 'react'
import { Link } from 'react-router'

class TopMenu extends React.Component {

  handleSearchDressChange(e){
    this.props.handleSearchDressChange(e.target.value)
  }

  render () {

    const activeTopMenuStyle = {
      float: 'right'
    }

    return (
      <div className='container'>
        <div className='topmenu'>
            <ul>
                <li><Link to='/mydress'>{this.props.categoryname}</Link></li>
                <li style={activeTopMenuStyle}><Link><input type='text' placeholder='search' value={this.props.searchDress} onChange={this.handleSearchDressChange.bind(this)} /></Link></li>
            </ul>
        </div>
      </div>
    )
  }
  
}

export default TopMenu