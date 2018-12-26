import * as React from "react";
import {BaseApplicationProps} from "./view.pc"
import { Action, MainActionType } from "./actions";
import { reducer } from "./reducer";
import { State } from "./state";
import { DH_NOT_SUITABLE_GENERATOR } from "constants";

export type Props = {

} & BaseApplicationProps;


export default (Base: React.ComponentClass<BaseApplicationProps>) => class ApplicationController extends React.PureComponent<Props, State> {
  state: State = {
    resultText: "0"
  };


  dispatch = (action: Action) => {
    this.setState(reducer(this.state, action));
  }
  
  render() {
    const {dispatch} = this;
    const {...rest} = this.props;
    return <Base {...rest} resultProps={{
      text: "555"
    }} clearButtonProps={{
      onClick: () => dispatch({ type: MainActionType.CLEAR_BUTTON_CLICKED })
    }} negateButtonProps={{
      onClick: () => dispatch({ type: MainActionType.TOGGLE_POSITIVE_BUTTON_CLICKED })
    }} decimalButtonProps={{
      onClick: () => dispatch({ type: MainActionType.DECIMAL_BUTTON_CLICKED })
    }}  divideButtonProps={{
      onClick: () => dispatch({ type: MainActionType.DIVIDE_BUTTON_CLICKED })
    }} divideButtonProps={{
      onClick: () => dispatch({ type: MainActionType.DIVIDE_BUTTON_CLICKED })
    }} />;
  }
}

