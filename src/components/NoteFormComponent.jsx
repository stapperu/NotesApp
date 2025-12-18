import { useState,useEffectEvent } from "react";

const NoteFormComponent = () => {
    const [title,setTitle]=useState();
    const [priority,setPriority]=useState('Medium');
    const [category,setCategory]=useState('Work');
    const [description,setDescription]=useState('');

    return ( 
        <>
     
        <form className="mb-6 p-4 pb-8 bg-gray-100 shadow-lg shadow-gray-100" action="">
          <div className="mb-4">
             <label htmlFor="name" className=" text-center text-md font-bold block">Title</label>
        <input className="bg-amber-50 border-b block mx-auto my-2 w-full max-w-80" type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}}/>
       </div>
          <div className="mb-4"><label htmlFor="name" className="mx-3 text-md font-bold block ">Priority</label>
                <select className="bg-amber-50 border-b- mx-auto my-2 w-full" type="text" value={priority} onChange={(e)=>{setPriority(e.target.value)}}>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
                </select> </div>
          <div className="mb-4"><label htmlFor="name" className="mx-3 text-md font-bold block">Category</label>
                <select className="bg-amber-50 border-b mx-auto my-2 w-full" type="text" value={category} onChange={(e)=>{setCategory(e.target.value)}}>
                <option value="Work">Work</option>
                <option value="Personal">Personal</option>
                <option value="Ideas">Ideas</option>
                 </select> </div>
          <div className="mb-4"><label htmlFor="name" className=" text-md font-bold block">Description</label>
                <textarea className="bg-amber-50 border-b mx-auto my-2 w-full" type="text" rows="5" value={description} onChange={(e)=>{setDescription(e.target.value)}}/> </div>
    <button className="block mx-auto p-6 text-xl rounded-md bg-amber-300 hover:bg-amber-400 text-white">Add Note</button>

        </form>
        </>
     );
}
 
export default NoteFormComponent;