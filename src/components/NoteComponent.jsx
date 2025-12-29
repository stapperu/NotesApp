import { useState, useRef, useEffect } from "react";
const NoteComponent = ({ note, deleteNote }) => {
	const timerRef = useRef(null);
	const [count, setCount] = useState({ hours: 0, minutes: 0, seconds: 0 });
	const [isCounting, setIsCounting] = useState(false);

	const toggleTimer = () => {
		if (isCounting) {
			clearInterval(timerRef.current);
			timerRef.current = null;
		} else {
			timerRef.current = setInterval(() => {
				setCount((prev) => {
					let { hours, minutes, seconds } = prev;

					seconds += 1;

					if (seconds >= 60) {
						seconds = 0;
						minutes += 1;
					}

					if (minutes >= 60) {
						minutes = 0;
						hours += 1;
					}

					return { hours, minutes, seconds };
				});
			}, 100);
		}
		setIsCounting(!isCounting);
	};

	const resetCounter = () => {
		clearInterval(timerRef.current);
		setIsCounting(false);
		setCount({ hours:0, minutes:0, seconds:0 });
		timerRef.current = null;
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
					className="cursor-pointer hover:bg-red-600 justify-self-end rounded-4xl flex justify-center leading-3 align-center w-5 h-5 bg-gray-200 text-black m-1 p-0.5"
					onClick={() => deleteNote(note.id)}
				>
					x
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
				<div className="p-4 ml-8 left-102 top-0 flex flex-col z-10 w-50 h-auto absolute text-center">
					<button className="left-0 top-0 self-end">x</button>
					<p>Timer:</p>
					<span className="text-xl font-bold text-amber-700" ref={timerRef}>
						{`${count.hours}:${count.minutes}:${count.seconds}`}
					</span>
					<button
						className=" startButton p-2 m-0.5 mt-4 uppercase font-bold rounded-md bg-green-300 "
						onClick={toggleTimer}
					>
						{!isCounting ? "Start" : "Pause"}
					</button>
					<button
						className="resetButton p-0.5 m-0.5 uppercase rounded-sm bg-red-300 font-light text-sm max-w-15 self-center"
						onClick={resetCounter}
					>
						Reset
					</button>
				</div>
			</div>
		</>
	);
};

export default NoteComponent;
