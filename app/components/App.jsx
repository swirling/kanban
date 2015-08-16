import React from 'react';
import Notes from './Notes';
import uuid from 'node-uuid';
import NoteActions from '../actions/NoteActions';
import NoteStore from '../stores/NoteStore';
export default class App extends React.Component {
  constructor(props){
  	super(props);
    this.storeChanged = this.storeChanged.bind(this);
  	this.state = NoteStore.getState();
  	this.addItem = this.addItem.bind(this);
  	this.itemEdited = this.itemEdited.bind(this);
  }
  componentDidMount(){
    NoteStore.listen(this.storeChanged);
  }
  componentWillUnmount(){
    NoteStore.unlisten(this.storeChanged);
  }
  storeChanged(state) {
    this.setState(state);
  }
  render() {
    const notes = this.state.notes;

    return (
      <div>
        <button onClick={this.addItem} >+</button>
        <Notes items={notes} onEdit={this.itemEdited} />
      </div>
    );
  }
  addItem(){
  	NoteActions.create({id:uuid.v4(),task:"New Task"});
  }
  itemEdited(id,task){
    if(task) {
      NoteActions.update({id, task});
    }
    else {
      NoteActions.delete(id);
    }
    // const remaining = this.state.notes.filter(item =>{ return item.id !== noteId});
    // this.setState({notes:remaining.concat(task?[{id:noteId,task}]:[])});

  }
  
}