import React , {Component} from 'react' ;
import Moviecard from './Moviecard';
import WithLoading from './WithLoading'

class Movielist extends Component {
    constructor(props) {
      super(props)
      this.state = { }
    }
     
    
    render() {
      const {x} = this.props;
      return (

          <div className="box-movie">
              {x.map(el => <Moviecard movie={el} />)}
              
          </div>
          
      )
  }
}

  
export default  WithLoading(Movielist) ;