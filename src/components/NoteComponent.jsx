const NoteComponent = (note) => {



	return (
		<div className="p-4 m-2 bg-amber-50 rounded-lg shadow-md border-l-8 border-amber-400"
		style={{borderLeftColor: note.note.priority=="High" ? "red" : note.note.priority=="Medium" ? "yellow" : "green"}}>
			<h3 className="text-xl font-bold uppercase text-amber-500">
				{note.note.title}
			</h3>
			<h5 className="mb-2 text-md font-semibold ">{note.note.priority}</h5>
			<h6 className="text-sm font text-gray-500  font-light">
				{note.note.category}
			</h6>
			<hr></hr>
			<p className="m-2 p-2 text-md font ">{note.note.description}</p>
		</div>
	);
};

export default NoteComponent;
