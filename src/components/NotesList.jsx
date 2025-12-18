import { useState } from "react";

const NoteList = ({ notes }) => {
	if (notes.length === 0) {
		return <p>No Notes Yet</p>;
	}

	return (
		<>
			<div className="noteslist w-full h-auto">
				<h1 className="mb-6 p-4 block text-center font-bold text-3xl uppercase text-amber-700">
					List
				</h1>
				{notes.map((note) => (
					<div
						key={note.id}
						className="p-4 m-2 bg-amber-50 rounded-lg shadow-md border-l-10 border-amber-600"
					>
						<h3 className="text-xl font-bold uppercase text-amber-800">{note.title}</h3>
                        <h5 className="mb-2 text-md font-semibold ">{note.priority}</h5>
                        <h5 className="text-sm font text-gray-500  font-light">{note.category}</h5>
                        <hr></hr>
                        <h5 className="m-2 p-2 text-md font ">{note.description}</h5>
					</div>
				))}
			</div>
		</>
	);
};

export default NoteList;
