import { Component } from "react";
import { connect } from "react-redux";
import { addToDo, completeToDo, updateToDo, fetchToDo } from '../../actions/todo.actions'

class ToDoList extends Component {
    constructor(props) {
        super(props);
        this.editIndex = null;

        this.state = {
            addToDo: false,
            titleInputVal: '',
            descriptionInputVal: ''
        }

        this.addToDo = this.addToDo.bind(this);
        this.onComplete = this.onComplete.bind(this);
        this.onEditToDo = this.onEditToDo.bind(this);
        this.navigateToAddToDo = this.navigateToAddToDo.bind(this);
        this.setTitleValue = this.setTitleValue.bind(this);
        this.setDescriptionValue = this.setDescriptionValue.bind(this);
        this.backToList = this.backToList.bind(this);
    }

    componentDidMount() {
        this.props.fetchToDo();
    }

    navigateToAddToDo() {
        this.setState({addToDo: true});
    }

    setTitleValue(e) {
        this.setState({titleInputVal: e.target.value});
    }

    setDescriptionValue(e) {
        this.setState({descriptionInputVal: e.target.value});
    }

    addToDo() {
        if (this.editIndex !== null) {
            this.props.updateToDo({
                title: this.state.titleInputVal,
                description: this.state.descriptionInputVal,
                index: this.editIndex
            })
        } else {
            this.props.addToDo({
                title: this.state.titleInputVal,
                description: this.state.descriptionInputVal
            })
        }
        this.setState({
            addToDo: false,
            titleInputVal: '',
            descriptionInputVal: ''
        });
        this.editIndex = null;
    }

    backToList() {
        this.setState({
            addToDo: false,
            titleInputVal: '',
            descriptionInputVal: ''
        });
    }

    onComplete(index) {
        return (e) => {
            e.stopPropagation();
            this.props.completeToDo(index);
        }
    }

    onEditToDo(currTodo, index) {
        this.setState({
            addToDo: true,
            titleInputVal: currTodo.title,
            descriptionInputVal: currTodo.description
        });
        this.editIndex = index;
    }

    render() {
        return (<>
            
            { this.state.addToDo && 
                <section>
                    <div>
                        <input type="text" value={this.state.titleInputVal} onChange={this.setTitleValue} placeholder="Add title" className="todo-inputs"/>
                        <textarea value={this.state.descriptionInputVal} onChange={this.setDescriptionValue} placeholder="Add description" className="todo-inputs"></textarea>
                    </div>
                    <button onClick={this.addToDo}>Add</button>
                    <button onClick={this.backToList}>Back</button>
                </section>
            }
            { !this.state.addToDo && <>
                <section className="input-box">
                    <button onClick={this.navigateToAddToDo}>Add new todo</button>
                </section>
                <section>
                {
                    this.props.todoList.map((todo, index) => {
                        return (
                            <div className={`${todo.completed ? 'disabled':''} todo-item`} onClick={this.onEditToDo.bind(null, todo, index)}>
                            {todo.title}
                            <button onClick={this.onComplete(index)}>Done</button>
                            </div>
                        )
                    })
                }
                </section>
            </>}
        </>);
    }
}

function mapStatetoProps(state) {
    return {
        todoList: state.todoList
    };
}

const mapDispatchToProps = {
    addToDo,
    completeToDo,
    updateToDo,
    fetchToDo
}

export default connect(mapStatetoProps, mapDispatchToProps)(ToDoList);
