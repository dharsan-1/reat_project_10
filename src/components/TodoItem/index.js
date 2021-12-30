import './index.css'

const TodoItem = props => {
  const {todoDetails, DeleteingItems} = props
  const {title, id} = todoDetails
  const onClickDelete = () => {
    DeleteingItems(id)
  }
  return (
    <div className="backThree">
      <p>{title}</p>
      <button type="button" className="delete-btn" onClick={onClickDelete}>
        Delete
      </button>
    </div>
  )
}
export default TodoItem
