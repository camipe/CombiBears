import React from 'react'
import BoxInfo from './boxinfo'

const styles = {

  icon: {
    height: '100px'
  },

  iconRight: {
    height: '100px',
    float: 'right',
    cursor: 'pointer'
  },

  arrowDiv: {
    position: 'fixed',
    right: '0',
    top: '50%',
    marginTop: '-50px'
  },

  iconRestart: {
    bottom: '0',
    right: '0',
    position: 'fixed',
    height: '80px',
    cursor: 'pointer'
  },
  iconReturn: {
    position: 'absolute',
    marginTop: '200px'
  },
  iconList: {
    position: 'fixed',
    margin: '175px 0px 0px 278px'
  }
}


export default class ResultList extends React.Component {
  render() {
    let rows = []
    for ( let FoundLoop = 0; FoundLoop < this.props.NumberOfBearsFound.length; FoundLoop++ )
    {
      for ( let AnswersLoop = 0; AnswersLoop < this.props.CorrectAnswers.length; AnswersLoop++ )
      {
        let test = JSON.stringify( this.props.NumberOfBearsFound[FoundLoop] ) === JSON.stringify( this.props.CorrectAnswers[AnswersLoop] )
        if ( test )
        {
          let obj = { found: 0, id: 0 }
          obj.found = 1
          rows.push( obj )
        }
      }
    }
    let num = 1
    for ( let newarray = 0; newarray < this.props.CorrectAnswers.length; newarray++ )
    {
      if ( rows.length > newarray )
      {
      }
      else
      {
        let obj = { found: 0, id: 0 }
        rows.push( obj )
        //alert("test");
      }
      if ( num < 10 )
        rows[newarray].id = "0"+num
      else
        rows[newarray].id = num
      num+=1
    }
    return (
      <div style={ styles.iconList }>
        <BoxInfo rows = { rows } />
      </div> )
  }
}


