import { useState } from "react";
import NoteComponent from "./NoteComponent";

const NoteList = ({ notes }) => {
	
	if (notes.length === 0) {
		return <p>No Notes Yet</p>;
	}

	return (
		<>
			<div className="noteslist w-full h-auto">
				<h1 className="mb-6 p-4 block text-center font-bold text-3xl uppercase text-amber-900">
					List 
				</h1>
				{notes.map((note) => (
					<NoteComponent note={note} key={note.id} />
					
				))}
			</div>
		</>
	);
};

export default NoteList;
