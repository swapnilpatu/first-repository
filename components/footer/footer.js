import { connect } from "react-redux";
import { getPendingTodosSelector } from "../../reducer/root.reducer";

function Footer ({pendingTodos}) {
    return <h2>Pending Todos: {pendingTodos}</h2>;
}

const mapStatetoProps = (state) => ({
    pendingTodos: getPendingTodosSelector(state)
})

export default connect(mapStatetoProps)(Footer);
