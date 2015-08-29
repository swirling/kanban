import React from 'react';
import AltContainer from 'alt/AltContainer';
import LaneStore from '../stores/LaneStore';
import Lanes from './Lanes.jsx';
import LaneActions from '../actions/LaneActions';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.addItem} >+</button>
        <AltContainer stores={[LaneStore]} 
        inject={ {items:()=>LaneStore.getState().lanes || []}}>
        <Lanes />
        </AltContainer>
      </div>
    );
  }
  addItem(){
  	LaneActions.create({name:"New lane"});
  }

  
}