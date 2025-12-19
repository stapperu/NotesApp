import { useState, useEffectEvent } from "react";



const NoteFormComponent = ({notes,setNotes}) => {    
    // alternative with each state separate, requires changing onChange to "onChange={(e)=>{setPriority(e.target.value)}}" and value to whatever the state is instead of "formData.x"
//     const [title,setTitle]=useState();
//     const [priority,setPriority]=useState('Medium');
//     const [category,setCategory]=useState('Work');
//     const [description,setDescription]=useState(''); }
const [formData, setFormData] = useState({
	title: "",
	priority: "Medium",
	category: "Work",
	description: "",
});
const handleChange = (e) => {
	setFormData({
		...formData,
		[e.target.name]: e.target.value,
	});
};

const handleSubmit=(e)=>{
    e.preventDefault();
    if(!formData.title || !formData.description) return;

    //  ATTENTION! Date.now() is NOT a solution suitable for production ! Only as a temporary fix in absence of database which would produce id's 
    const newNote={id: Date.now(), ...formData};

    setNotes([newNote, ...notes])

    setFormData ({
        	title: "",
	priority: "",
	category: "",
	description: "",
    });
}

return (
	<>
		<form
			className="mb-6 p-4 pb-8 bg-amber-50 shadow-lg shadow-gray-100"
			onSubmit={handleSubmit}
		>
			<div className="mb-4">
				<label htmlFor="name" className=" text-center text-md font-bold block">
					Title
				</label>
				<input
					className="bg-white border-b border-amber-500 block mx-auto my-2 w-full max-w-80"
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
					className="bg-white border-b border-amber-500 mx-auto my-2 w-full"
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
					className="bg-white border-b border-amber-500 mx-auto my-2 w-full"
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
					className="bg-white border-b border-amber-500 mx-auto my-2 w-full"
					type="text"
					rows="5"
					name="description"
					value={formData.description}
					onChange={handleChange}
				/>{" "}
			</div>
			<button className="block mx-auto p-6 text-xl rounded-md bg-amber-400 hover:bg-white0 text-white" >
				Add Note
			</button>
		</form>
	</>
)};

export default NoteFormComponent;
