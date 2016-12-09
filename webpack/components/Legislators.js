import React from 'react'
import { Router, Route, Link, browserHistory } from 'react-router'
import Legislator from './Legislator'

class Legislators extends React.Component {
 constructor(props) {
   super(props)
   this.updateLegislators = this.updateLegislators.bind(this)
   this.state = {
     legislators: [],
     arrayLength: ''
   }
 }

   componentDidMount() {
       fetch('/self?' + 'user_email=' + sessionStorage.getItem('email') + '&user_token=' +  sessionStorage.getItem('api_token'))
       .then(response => response.json())
       .then(this.updateLegislators)
      //  .then(response => console.log(response))
   }

   updateLegislators(userData) {
      var namesList = []
      var finalArray = []
      var legArray = userData.user.legislators
      legArray.map((data, i) => {
        if (namesList.includes(data.first_name + ' ' + data.last_name){
        }
        else{
           push.namesList(data.first_name + ' ' + data.last_name)
           push.finalArray(data)
        }
     })
      this.setState({
         legislators: finalArray,
         arrayLength: Number(userData.user.legislators.length)
      })
      // console.log(this.state.arrayLength)
   }

 render() {
    if(this.state.arrayLength != 0) {
         var legislator = this.state.legislators.map((data, i) => {
            return <Legislator data={data} key={i} />
               })
   }
   else {
   return <div>
      <div className='hiddenSection'>
        <div className="col-sm-3 columnContainer">
          <div className="text-center titleFont">Legislators</div>
            <Link to="/alllegislators"><button className="btn avatarText text-center">start<br/> following</button></Link>
          </div>
        </div>
      </div>
   }

   return <div>
   <div className='hiddenSection'>
     <div className="col-sm-3 columnContainer">
       <div className="text-center titleFont">Legislators</div>
         {legislator}
       </div>
     </div>
   </div>
 }
}

export default Legislators
