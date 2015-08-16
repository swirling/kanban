import alt from '../libs/alt';
import NoteActions from '../actions/NoteActions';

class NoteStore {
	constructor(){
		this.bindActions(NoteActions);
		this.notes = this.notes || [];
	}
	create(note){
		const notes = this.notes;
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