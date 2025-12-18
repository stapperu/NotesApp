import { useState, useEffectEvent } from "react";
// alternative with each state separate, requires changing onChange to "onChange={(e)=>{setPriority(e.target.value)}}" and value to whatever the state is instead of "formData.x"
const NoteFormComponent = () => {
//     const [title,setTitle]=useState();
//     const [priority,setPriority]=useState('Medium');
//     const [category,setCategory]=useState('Work');
//     const [description,setDescription]=useState(''); }

const [formData, setFormData] = useState({
	title: "",
	priority: "",
	category: "",
	description: "",
});
const handleChange = (e) => {
	setFormData({
		...formData,
		[e.target.name]: e.target.value,
	});
};

return (
	<>
		<form
			className="mb-6 p-4 pb-8 bg-gray-100 shadow-lg shadow-gray-100"
			action=""
		>
			<div className="mb-4">
				<label htmlFor="name" className=" text-center text-md font-bold block">
					Title
				</label>
				<input
					className="bg-amber-50 border-b block mx-auto my-2 w-full max-w-80"
					name="title"
					type="text"
					value={formData.title}
					onChange={handleChange}
				/>
			</div>
			<div className="mb-4">
				<label htmlFor="name" className="mx-3 text-md font-bold block ">
					Priority
				</label>
				<select
					className="bg-amber-50 border-b- mx-auto my-2 w-full"
					type="text"
					name="priority"
					value={formData.priority}
					onChange={handleChange}
				>
					<option value="High">High</option>
					<option value="Medium">Medium</option>
					<option value="Low">Low</option>
				</select>{" "}
			</div>
			<div className="mb-4">
				<label htmlFor="name" className="mx-3 text-md font-bold block">
					Category
				</label>
				<select
					className="bg-amber-50 border-b mx-auto my-2 w-full"
					type="text"
					name="category"
					value={formData.category}
					onChange={handleChange}
				>
					<option value="Work">Work</option>
					<option value="Personal">Personal</option>
					<option value="Ideas">Ideas</option>
				</select>{" "}
			</div>
			<div className="mb-4">
				<label htmlFor="name" className=" text-md font-bold block">
					Description
				</label>
				<textarea
					className="bg-amber-50 border-b mx-auto my-2 w-full"
					type="text"
					rows="5"
					name="description"
					value={formData.description}
					onChange={handleChange}
				/>{" "}
			</div>
			<button className="block mx-auto p-6 text-xl rounded-md bg-amber-300 hover:bg-amber-400 text-white">
				Add Note
			</button>
		</form>
	</>
)};

export default NoteFormComponent;
