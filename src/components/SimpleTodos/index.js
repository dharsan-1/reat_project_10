import {Component} from 'react'
import './index.css'
import TodoItem from '../TodoItem'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

class SimpleTodos extends Component {
  state = {todosList: initialTodosList}

  DeleteingItems = id => {
    const {todosList} = this.state
    const FinalDeletedItem = todosList.filter(each => each.id !== id)

    this.setState({todosList: FinalDeletedItem})
  }

  render() {
    const {todosList} = this.state
    return (
      <div className="back">
        <div className="secBack">
          <h1 className="h1">Simple Todos</h1>
          <ul>
            {todosList.map(each => (
              <TodoItem
                todoDetails={each}
                DeleteingItems={this.DeleteingItems}
                key={each.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SimpleTodos
