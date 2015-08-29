import alt from '../libs/alt';
import NoteActions from '../actions/NoteActions';
import uuid from 'node-uuid';
class NoteStore {
	constructor(){
		this.bindActions(NoteActions);
		this.notes = this.notes || [];
		this.exportPublicMethods({
	      get: this.get.bind(this)
	    });
	}
	get(ids) {
	    const notes = this.notes || [];
	    const notesIds = notes.map((note) => note.id);

	    if(ids) {
	      return ids.map((id) => notes[notesIds.indexOf(id)]);
	    }

	    return [];
	}
	create(note){
		const notes = this.notes;
		note.id = note.id ||uuid.v4();
		this.setState({
			notes:notes.concat(note)
		})
	}
	update({id,task}){
		const notes = this.notes;
		const remaining = notes.map((item)=>{
			if( item.id !== id){
				return item;
			}else{
				const new_item = {id:item.id,task:task};
				return new_item;
			}
		});

		this.setState({
			notes:remaining
		});
	}
	delete(id){
		const remaining = this.notes.filter(item => {return item.id!==id});
		this.setState({notes:remaining});
	}
}
export default alt.createStore(NoteStore,"NoteStore");