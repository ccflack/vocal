import React from 'react'
import { Router, Route, Link, browserHistory } from 'react-router'
import SingleLegislation from './SingleLegislation'
import ShortHeader from './ShortHeader'

class AllLegislations extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      bills: [
        {
          title: 'hb101',
          shortDesc: 'education education education',
          authorPic: null,
          authorName: 'john',
          coAuthors: ['john', 'john','john', 'john','john', 'john'],
          longDesc: 'loremsjkflseijiasejfelisafjdaslk;fjadslk;fjdsalkfjaslkf;adjsf;kladjflkdsjfsd;kljasdlsk;afjadslkfajsdlk'
        },
        {
          title: 'hb101',
          shortDesc: 'education education education',
          authorPic: null,
          authorName: 'john',
          coAuthors: ['john', 'john','john', 'john','john', 'john'],
          longDesc: 'loremsjkflseijiasejfelisafjdaslk;fjadslk;fjdsalkfjaslkf;adjsf;kladjflkdsjfsd;kljasdlsk;afjadslkfajsdlk'
        },
        {
          title: 'hb101',
          shortDesc: 'education education education',
          authorPic: null,
          authorName: 'john',
          coAuthors: ['john', 'john','john', 'john','john', 'john'],
          longDesc: 'loremsjkflseijiasejfelisafjdaslk;fjadslk;fjdsalkfjaslkf;adjsf;kladjflkdsjfsd;kljasdlsk;afjadslkfajsdlk'
        },
        {
          title: 'hb101',
          shortDesc: 'education education education',
          authorPic: null,
          authorName: 'john',
          coAuthors: ['john', 'john','john', 'john','john', 'john'],
          longDesc: 'loremsjkflseijiasejfelisafjdaslk;fjadslk;fjdsalkfjaslkf;adjsf;kladjflkdsjfsd;kljasdlsk;afjadslkfajsdlk'
        },
        {
          title: 'hb101',
          shortDesc: 'education education education',
          authorPic: null,
          authorName: 'john',
          coAuthors: ['john', 'john','john', 'john','john', 'john'],
          longDesc: 'loremsjkflseijiasejfelisafjdaslk;fjadslk;fjdsalkfjaslkf;adjsf;kladjflkdsjfsd;kljasdlsk;afjadslkfajsdlk'
        },
        {
          title: 'hb101',
          shortDesc: 'education education education',
          authorPic: null,
          authorName: 'john',
          coAuthors: ['john', 'john','john', 'john','john', 'john'],
          longDesc: 'loremsjkflseijiasejfelisafjdaslk;fjadslk;fjdsalkfjaslkf;adjsf;kladjflkdsjfsd;kljasdlsk;afjadslkfajsdlk'
        },
        {
          title: 'hb101',
          shortDesc: 'education education education',
          authorPic: null,
          authorName: 'john',
          coAuthors: ['john', 'john','john', 'john','john', 'john'],
          longDesc: 'loremsjkflseijiasejfelisafjdaslk;fjadslk;fjdsalkfjaslkf;adjsf;kladjflkdsjfsd;kljasdlsk;afjadslkfajsdlk'
        },
        {
          title: 'hb101',
          shortDesc: 'education education education',
          authorPic: null,
          authorName: 'john',
          coAuthors: ['john', 'john','john', 'john','john', 'john'],
          longDesc: 'loremsjkflseijiasejfelisafjdaslk;fjadslk;fjdsalkfjaslkf;adjsf;kladjflkdsjfsd;kljasdlsk;afjadslkfajsdlk'
        },
        {
          title: 'hb101',
          shortDesc: 'education education education',
          authorPic: null,
          authorName: 'john',
          coAuthors: ['john', 'john','john', 'john','john', 'john'],
          longDesc: 'loremsjkflseijiasejfelisafjdaslk;fjadslk;fjdsalkfjaslkf;adjsf;kladjflkdsjfsd;kljasdlsk;afjadslkfajsdlk'
        },
        {
          title: 'hb101',
          shortDesc: 'education education education',
          authorPic: null,
          authorName: 'john',
          coAuthors: ['john', 'john','john', 'john','john', 'john'],
          longDesc: 'loremsjkflseijiasejfelisafjdaslk;fjadslk;fjdsalkfjaslkf;adjsf;kladjflkdsjfsd;kljasdlsk;afjadslkfajsdlk'
        },
        {
          title: 'hb101',
          shortDesc: 'education education education',
          authorPic: null,
          authorName: 'john',
          coAuthors: ['john', 'john','john', 'john','john', 'john'],
          longDesc: 'loremsjkflseijiasejfelisafjdaslk;fjadslk;fjdsalkfjaslkf;adjsf;kladjflkdsjfsd;kljasdlsk;afjadslkfajsdlk'
        },

      ]
    }
  }
  render() {
    var alllegislation = this.state.bills.map((data, i) => {
      return <SingleLegislation data={data} key={i} />
    })
    return <div>
      <div className='container-fluid'>
        <ShortHeader />
      </div> <br/>
      <div className="container-fluid whiteBackground">
      <br/>
        <div className="row">
          <div className="col-sm-3">
            <ul className='list-unstyled yearsNav text-right'>
            <li className="input-group">
              <input type="text" className="form-control" placeholder="Search for..." />
              <span className="input-group-btn">
                <button className="btn btn-default" type="button">
         <span className="glyphicon glyphicon-search" aria-hidden="true"></span></button>
              </span>
              </li><br/>
              <div className="legText text-center">Filter by Year</div>
              <li className='btn legText yearText'>2016</li>
              <li className='btn legText yearText'>2015</li>
              <li className='btn legText yearText'>2014</li>
            </ul>
          </div>
          <div className="col-sm-9 borderBills whiteBackground">
            {alllegislation}


          </div>
        </div>
      </div>
    </div>
  }
}
export default AllLegislations
