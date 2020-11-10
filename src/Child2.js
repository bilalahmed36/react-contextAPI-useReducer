import React from 'react';
//import counterReducer from './CounterReducer';

class Child2 extends React.Component {
    constructor() {
      super();
      this.state = {
        name: "",
        shareholders: [{ name: "", add: "" }]
      };
    }
  
    handleNameChange = evt => {
      this.setState({ name: evt.target.value });
    };
  
    handleShareholderNameChange = idx => evt => {
      const newShareholders = this.state.shareholders.map((shareholder, sidx) => {
        if (idx !== sidx) return shareholder;
        return { ...shareholder, name: evt.target.value };
      });
  
      this.setState({ shareholders: newShareholders });
    };
    handleShareholderAddChange = idx => evt => {
        const newShareholders = this.state.shareholders.map((shareholder, sidx) => {
          if (idx !== sidx) return shareholder;
          return { ...shareholder, add: evt.target.value };
        });
    
        this.setState({ shareholders: newShareholders });
      };
  
    handleSubmit = evt => {
      const { name, add ,shareholders } = this.state;
      alert(`Incorporated: ${name} and ${add} with ${shareholders.length} shareholders`);
    };
  
    handleAddShareholder = () => {
      this.setState({
        shareholders: this.state.shareholders.concat([{ name: "",add:"" }])
      });
    };
  
    handleRemoveShareholder = idx => () => {
      this.setState({
        shareholders: this.state.shareholders.filter((s, sidx) => idx !== sidx)
      });
    };
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Company name, e.g. Magic Everywhere LLC"
            value={this.state.name}
            onChange={this.handleNameChange}
          />
  
          <h4>Shareholders</h4>
  
          {this.state.shareholders.map((shareholder, idx) => (
            <div className="shareholder">
              <input
                type="text"
                placeholder={`Shareholder #${idx + 1} name`}
                value={shareholder.name}
                onChange={this.handleShareholderNameChange(idx)}
              />
              <input
                type="text"
                placeholder={`Shareholder #${idx + 1} name`}
                value={shareholder.add}
                onChange={this.handleShareholderAddChange(idx)}
              />
              <button
                type="button"
                onClick={this.handleRemoveShareholder(idx)}
                className="small"
              >
                -
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={this.handleAddShareholder}
            className="small"
          >
            Add Shareholder
          </button>
          <button>Incorporate</button>
        </form>
      );
    }
  }
  

export default Child2;