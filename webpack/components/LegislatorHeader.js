import React from 'react'
import { Router, Route, Link, browserHistory } from 'react-router'
import { DropdownButton, MenuItem } from 'react-bootstrap'


class LegislatorHeader extends React.Component {
  constructor(props) {
    super(props)
    this.updateLegislator = this.updateLegislator.bind(this)
    this.updatePhoto = this.updatePhoto.bind(this)
    this.logout = this.logout.bind(this)
    this.state = {
      title: "--",
      firstName: "--",
      lastName: "--",
      photo: null,
      party: "--",
      userPhoto: null,
      // points: '',
    }
  }
  componentDidMount() {
    fetch('/legislators/' +  sessionStorage.getItem('legislator_id'))
    .then(response => response.json())
    .then(this.updateLegislator)
    // .then(response => console.log(response))

    fetch('/self/?authentication_token=' +  sessionStorage.getItem('api_token'))
    .then(response => response.json())
    .then(this.updatePhoto)
   }

   updateLegislator(userData) {
    this.setState ({
      photo: userData.legislator.leg_image,
      firstName: userData.legislator.first_name,
      lastName: userData.legislator.last_name,
      party: userData.legislator.party,
      title: userData.legislator.title
    })
   }

    updatePhoto(userData) {
     this.setState ({
       userPhoto: userData.user.profile_image,
     })
    }

   logout(){
     sessionStorage.removeItem('user_id')
  }

  render(){
    return <div>
    <div className='hiddenSection'>
      <div className='row'>
        <div className='col-sm-12'>
          <h1 className='logoFont'>vocal</h1>
          <ul className='inlineHeader pull-right list-unstyled list-inline'>
              <Link to="/alllegislators" className="linkStyle"><li className='navItems'>Legislators</li></Link>
              <Link to="/alllegislation" className="linkStyle"><li className='navItems'>Legislation</li></Link>
              <span className='navItems dropdownText'>
              <DropdownButton title='' id="bg-nested-dropdown" className='glyphicon glyphicon-cog dropdownBtn'>
               <MenuItem eventKey="1"><Link to='/settings'>Settings</Link></MenuItem>
               <MenuItem eventKey="2"><Link to="/" onClick={this.logout}>Logout</Link></MenuItem>
             </DropdownButton>
             </span>
              <Link className="linkStyleImg" to='/profile/legislators'><li><img src={this.state.userPhoto} alt='profile photo' className='img-responsive img-circle smlProfileImg' /></li></Link>
            </ul>
        </div>
      </div>
      <div className="row">
        <div className='col-sm-12'>
          <img src={this.state.photo} alt='profile photo' className='center-block img-circle profileImg img-responsive' />
          <br />
          <h2 className="text-center profileText">{this.state.title}<br/>
          {this.state.firstName} {this.state.lastName}</h2>
          <h5 className="text-center profileTextTwo">{this.state.party} | followBtn</h5>
        </div>
      </div>
    </div>
      <div className='mobileReveal'>
        <div className='row'>
          <div className='col-xs-12'>
            <h1 className='logoFont text-left'>vocal</h1>
            <div className='pull-right'>
            <DropdownButton title='' id="bg-nested-dropdown" className='glyphicon glyphicon-cog dropdownBtn'>
             <MenuItem eventKey="1"><Link to='/profile/legislators'>Profile</Link></MenuItem>
             <MenuItem eventKey="2"><Link to='/alllegislators'>Legislators</Link></MenuItem>
             <MenuItem eventKey="2"><Link to='/alllegislation'>Legislation</Link></MenuItem>
             <MenuItem eventKey="3"><Link to='/settings'>Settings</Link></MenuItem>
             <MenuItem eventKey="4"><Link to="/" onClick={this.logout}>Logout</Link></MenuItem>
           </DropdownButton>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-xs-12'>
          <img src={this.state.photo} alt='profile photo' className='img-responsive center-block img-circle profileImg' />
          <br />
          <h2 className="text-center profileText">{this.state.title}<br/>
          {this.state.firstName} {this.state.lastName}</h2>
          <h5 className="text-center profileTextTwo">{this.state.party} | followBtn</h5>
          <br/>
         </div>
        </div>
      </div>
      </div>

  }
}
export default LegislatorHeader
