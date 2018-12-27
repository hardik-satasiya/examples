import * as React from "react";
import { BaseApplicationProps, Item as TodoItemComponent } from "./view.pc";

export type Props = {} & BaseApplicationProps;

type TodoItem = {
  text: string;
};

type State = {
  todoItems: TodoItem[];
  newTodoText: string;
};

export default (Base: React.ComponentClass<BaseApplicationProps>) =>
  class ApplicationController extends React.PureComponent<Props, State> {
    state = {
      todoItems: [],
      newTodoText: null
    };

    onInputChange = (event: React.KeyboardEvent<any>) => {
      this.setState({
        ...this.state,
        newTodoText: (event.target as HTMLInputElement).value
      });
    };

    onAddTodoClick = () => {
      this.addTodoItem();
    };

    onInputKeyDown = (event: React.KeyboardEvent<any>) => {
      if (event.key === "Enter") {
        this.addTodoItem();
      }
    };

    addTodoItem() {
      if (!this.state.newTodoText) {
        return null;
      }
      this.setState({
        ...this.state,
        todoItems: [...this.state.todoItems, { text: this.state.newTodoText }],
        newTodoText: null
      });
    }

    render() {
      const { onInputChange, onAddTodoClick, onInputKeyDown } = this;
      const { ...rest } = this.props;
      const { todoItems, newTodoText } = this.state;
      const items = todoItems.map((todoItem, i) => (
        <TodoItemComponent key={i} labelProps={{ text: todoItem.text }} />
      ));
      return (
        <Base
          {...rest}
          items={items}
          inputProps={
            {
              onChange: onInputChange,
              onKeyDown: onInputKeyDown,
              value: newTodoText || ""
            } as any
          }
          addTodoButtonProps={{ onClick: onAddTodoClick }}
        />
      );
    }
  };
