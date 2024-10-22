/* eslint-disable react/prop-types */
import Task from "./Task";


const TaskList = ({tasks,onChangeTask,onDeleteTask}) => {
    return (
        
        <ul>
           { tasks.map(task => <Task key={task.id} task={task} onChangeTask={onChangeTask} onDeleteTask={onDeleteTask}/> )}
            
        </ul>
            
       
    );
};

export default TaskList;