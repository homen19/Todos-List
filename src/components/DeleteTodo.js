import DeleteIcon from '@mui/icons-material/Delete';
import { border } from '@mui/system';

function DeleteTodo({ todo, setTodos }) {
    function handleDeleteTodo() {
        const confirmed = window.confirm("Do you want to delete this?");
        if (confirmed) {
            setTodos((prevTodos) => {
                return prevTodos.filter((t) => t.id !== todo.id);
            });
        }
    }

    return (
        //   <span
        //     onClick={handleDeleteTodo}
        //     role="button"
        //     style={{
        //       color: "red",
        //       fontWeight: "bold",
        //       marginLeft: 10,
        //       cursor: "pointer"
        //     }}
        //   >
        //     <DeleteIcon fontSize='small'/>
        //   </span>
        <button
            onClick={handleDeleteTodo}
            style={{
                marginLeft:10,
                backgroundColor:'red',
                border: 'none',
                color:'#fff'
            }}
        >
            X
        </button>

    );
}
export default DeleteTodo;