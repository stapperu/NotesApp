import {useRef, useState, useEffect} from "react"

const TimerComponent = ({}) => {
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
			}, 1000);
		}
		setIsCounting(!isCounting);
	};

	const resetCounter = () => {
		clearInterval(timerRef.current);
		setIsCounting(false);
		setCount({ hours: 0, minutes: 0, seconds: 0 });
		timerRef.current = null;
	};

	return (
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
	);
};

export default TimerComponent;