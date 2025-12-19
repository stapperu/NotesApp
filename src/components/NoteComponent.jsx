const NoteComponent = (note) => {
console.log(note)

	return (
		<div className="p-4 m-2 bg-amber-50 rounded-lg shadow-md border-l-8 border-amber-600">
			<h3 className="text-xl font-bold uppercase text-amber-800">
				{note.note.title}
			</h3>
			<h5 className="mb-2 text-md font-semibold ">{note.note.priority}</h5>
			<h5 className="text-sm font text-gray-500  font-light">
				{note.note.category}
			</h5>
			<hr></hr>
			<p className="m-2 p-2 text-md font ">{note.note.description}</p>
		</div>
	);
};

export default NoteComponent;
