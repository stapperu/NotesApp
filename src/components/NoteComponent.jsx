import { useState, useRef, useEffect } from "react";
import TimerComponent from "./TimerComponent";
import hourglass from "../assets/hourglass.svg";
const NoteComponent = ({ note, deleteNote }) => {
	const [isClicked, setIsClicked] = useState(false);

	const toggleTimer = (e) => {
		setIsClicked(!isClicked);
	};
	return (
		<>
			<div
				className="p-4 m-2 z-20 bg-amber-50 rounded-lg shadow-md border-l-8 border-amber-400 relative"
				style={{
					borderLeftColor:
						note.priority == "High"
							? "red"
							: note.priority == "Medium"
							? "yellow"
							: "green",
				}}
			>
				<button
					className="cursor-pointer hover:bg-red-600 justify-self-end rounded-4xl flex justify-center leading-1 align-center w-5 h-5 border border-gray-300 text-black m-1 p-1 text-xl"
					onClick={() => deleteNote(note.id)}
				>
					x
				</button>
				<button
					className="cursor-pointer hover:text-green-600 flex justify-self-end text-black m-1 p-0.5 text-sm font-light"
					onClick={toggleTimer}
				>
					<img className="text-sm text-green-700 h-4 w-4" src={hourglass} />
				</button>
				<h3 className="text-xl font-bold uppercase text-amber-500">
					{note.title}
				</h3>
				<h5 className="mb-2 text-md font-semibold ">{note.priority}</h5>
				<h6 className="text-sm font text-gray-500  font-light">
					{note.category}
				</h6>
				<hr></hr>
				<p className="m-2 p-2 text-md font ">{note.description}</p>
				{isClicked ? <TimerComponent note={note} /> : null}
			</div>
		</>
	);
};

export default NoteComponent;
