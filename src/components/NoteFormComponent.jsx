import { useState, useEffectEvent } from "react";

const NoteFormComponent = ({ notes, setNotes }) => {
	// alternative with each state separate, requires changing onChange to "onChange={(e)=>{setPriority(e.target.value)}}" and value to whatever the state is instead of "formData.x"
	//     const [title,setTitle]=useState();
	//     const [priority,setPriority]=useState('Medium');
	//     const [category,setCategory]=useState('Work');
	//     const [description,setDescription]=useState(''); }
	const [error, setError] = useState("");
	const [formData, setFormData] = useState({
		title: "",
		priority: null,
		category: null,
		description: "",
	});
	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (
			!formData.title ||
			!formData.description ||
			!formData.category ||
			!formData.priority
		) {
			setError("Please fill out all fields");
			return;
		}

		setError("");

		//  ATTENTION! Date.now() is NOT a solution suitable for production ! Only as a temporary fix in absence of database which would produce id's
		const newNote = { id: Date.now(), ...formData };

		setNotes([newNote, ...notes]);

		setFormData({
			title: "",
			priority: "",
			category: "",
			description: "",
		});
	};

	return (
		<>
			{error && (
				<div className="modal max-w-lg h-auto rounded-md bg-red-800 text-white z-10 block p-2 text-center ">
					<p>{error}</p>
				</div>
			)}
			<form
				className="mb-6 p-4 pb-8 bg-amber-50 shadow-lg shadow-gray-100 "
				onSubmit={handleSubmit}
				id="noteform"
			>
				<div className="mb-4">
					<label
						htmlFor="title"
						className=" text-center text-md font-bold block"
					>
						Title
					</label>
					<input
						className="bg-white border-b border-amber-500 block mx-auto my-2 w-full max-w-80"
						name="title"
						type="text"
						id="title"
						value={formData.title}
						onChange={handleChange}
					/>
				</div>
				<div className="mb-4">
					<label htmlFor="priority" className="mx-3 text-md font-bold block ">
						Priority
					</label>
					<select
						className="bg-white border-b border-amber-500 mx-auto my-2 w-full"
						type="text"
						name="priority"
						id="priority"
						value={formData.priority}
						onChange={handleChange}
					>
						<option value="">---</option>
						<option value="High">High</option>
						<option value="Medium">Medium</option>
						<option value="Low">Low</option>
					</select>
				</div>
				<div className="mb-4">
					<label htmlFor="category" className="mx-3 text-md font-bold block">
						Category
					</label>
					<select
						className="bg-white border-b border-amber-500 mx-auto my-2 w-full"
						type="text"
						name="category"
						id="category"
						value={formData.category}
						onChange={handleChange}
					>
						<option value="">---</option>
						<option value="Work">Work</option>
						<option value="Personal">Personal</option>
						<option value="Ideas">Ideas</option>
					</select>
				</div>
				<div className="mb-4">
					<label htmlFor="description" className=" text-md font-bold block">
						Description
					</label>
					<textarea
						className="bg-white border-b border-amber-500 mx-auto my-2 w-full"
						type="text"
						rows="5"
						name="description"
						id="description"
						value={formData.description}
						onChange={handleChange}
					/>{" "}
				</div>
				<button className="block mx-auto p-6 text-xl rounded-md bg-amber-400 hover:bg-amber-500 text-white">
					Add Note
				</button>
			</form>
		</>
	);
};

export default NoteFormComponent;
