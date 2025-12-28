const NoteComponent = ({note, deleteNote}) => {



	return (
		<div className="p-4 m-2 bg-amber-50 rounded-lg shadow-md border-l-8 border-amber-400"
		style={{borderLeftColor: note.priority=="High" ? "red" : note.priority=="Medium" ? "yellow" : "green"}}>
			<button className="cursor-pointer hover:bg-red-600 justify-self-end rounded-4xl flex justify-center leading-3 align-center w-5 h-5 bg-gray-200 text-black m-1 p-0.5" onClick={()=>deleteNote(note.id)}>x</button>
			<h3 className="text-xl font-bold uppercase text-amber-500">
				{note.title}
			</h3>
			<h5 className="mb-2 text-md font-semibold ">{note.priority}</h5>
			<h6 className="text-sm font text-gray-500  font-light">
				{note.category}
			</h6>
			<hr></hr>
			<p className="m-2 p-2 text-md font ">{note.description}</p>
		</div>
	);
};

export default NoteComponent;
