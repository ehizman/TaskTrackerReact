import { useState } from "react";

export const AddTask = ({onAdd}) => {
    const[title, setTitle] = useState('');
    const[day, setDay] = useState('');
    const[reminder, setReminder] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();
        if (!title){
            alert("Please enter a task!");
        }
        const task = {title, day, reminder};
        onAdd(task)
        setTitle('')
        setDay('')
        setReminder(false)
    }

    return (
        <form className = "add-form" onSubmit={onSubmit}>
            <div className="form-control">
                <label>Task</label>
                <input type={"text"} 
                    placeholder={"Enter the task title"} 
                    onChange={(e) => setTitle(e.target.value)} 
                    value = {title}
                />
            </div>

            <div className="form-control">
                <label>Day & Time</label>
                <input type={"text"} 
                    placeholder={"Add Day & Time"} 
                    onChange={(e) => setDay(e.target.value)}
                    value= {day} />
            </div>

            <div className="form-control form-control-check">
                <label>Set Reminder</label>
                <input type={"checkbox"} 
                    checked = {reminder}
                    onChange={(e) => setReminder(e.currentTarget.checked)} 
                    value={reminder}
                />
            </div>
            <input type="submit" value="Save Task" className="btn btn-block"/>
        </form>
    ); 
}