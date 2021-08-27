import React, {useRef, useState, useEffect} from "react";
import "./index.css";

export const App = ({controlled}) => {
  const myRef = useRef();
  const [checked, setChecked] = useState(false);
  const [disabled, setDisabled] = useState(false);
  // on uncontrolled page, use ref value as checked state
  useEffect(() => {
    if (!controlled) setChecked(myRef.current.value);
  }, []);
  const onChange = () => {
    setChecked(checked => !checked);
  };
  const onToggleDisable = () => {
    setDisabled(disabled => !disabled);
  };
  // update App's checked state to ref value to display to user
  const getUncontrolledSwitch = () => {
    setChecked(myRef.current.value);
  };

  return (
    <div style={{display: "flex", flexWrap: "wrap", justifyContent: "space-around"}}>
      {controlled ? (
        <div>
          <h2>Controlled Switch</h2>
          <Switch checked={checked} disabled={disabled} onChange={onChange} />
          <p>Disabled status: {JSON.stringify(disabled)}</p>
          <p>Prop status: {JSON.stringify(checked)}</p>
          <button type="button" onClick={onToggleDisable} name="disable-controlled">
            Toggle Disable
          </button>
        </div>
      ) : (
        <div>
          <h2>Uncontrolled Switch</h2>
          <Switch defaultChecked={false} ref={myRef} disabled={disabled} />
          <p>Disabled status: {JSON.stringify(disabled)}</p>
          <p>Ref status: {JSON.stringify(checked)}</p>
          <p style={{fontSize: "0.8rem"}}>(Click 'Get Latest Status' to update Ref status)</p>
          <button type="button" onClick={getUncontrolledSwitch}>
            Get Latest Status
          </button>
          <br />
          <button type="button" onClick={onToggleDisable} name="disable-uncontrolled">
            Toggle Disable
          </button>
        </div>
      )}
    </div>
  );
};

export default class Switch extends React.PureComponent {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.input = React.createRef();
    this.state = {
      checked: !!(this.props.checked || this.props.defaultChecked),
    };
  }

  componentDidMount() {
    if (this.input.current) {
      this.input.current.checked = this.state.checked;
    }
  }

  // controlled mode can utilize props change to update internal state
  static getDerivedStateFromProps(props, state) {
    if (props.checked !== undefined && props.checked !== state.checked) {
      return {
        checked: props.checked,
      };
    }
    return null;
  }

  handleClick() {
    const {disabled, checked, onChange} = this.props;
    if (disabled) {
      return;
    } else {
      const checkbox = this.input.current;
      if (checkbox) {
        checkbox.focus();
        checkbox.checked = !this.state.checked;
      }
      if (onChange !== undefined) {
        onChange(!checked);
      } else {
        this.setState(prevState => ({checked: !prevState.checked}));
      }
    }
  }

  // for parent to access checked in an uncontrolled component
  get value() {
    return this.state.checked;
  }

  render() {
    return (
      <>
        <div className="comp-switch" onClick={this.handleClick}>
          <input ref={this.input} type="checkbox" disabled={!!this.props.disabled} />
          <span className="track" role="switch" />
        </div>
      </>
    );
  }
}

export {App as SwitchApp, Switch};
