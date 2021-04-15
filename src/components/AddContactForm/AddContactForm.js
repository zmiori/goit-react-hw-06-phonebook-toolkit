import { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import s from './AddContactForm.module.css';

class AddContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  nameInputId = uuidv4();
  numberInputId = uuidv4();

  normalizedTitle = t => {
    return t[0].toUpperCase() + t.slice(1);
  };

  handleChange = ({ target }) => {
    const { name, value } = target;

    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state);
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;

    return (
      <form onSubmit={this.handleSubmit} className={s.addContactForm}>
        <div className={s.formItem}>
          <label htmlFor={this.nameInputId}>Name</label>
          <input
            type="text"
            placeholder="Enter name"
            name="name"
            id={this.nameInputId}
            value={name}
            onChange={this.handleChange}
          />
        </div>
        <div className={s.formItem}>
          <label htmlFor={this.numberInputId}> Number </label>
          <input
            type="tel"
            placeholder="Enter phone number"
            name="number"
            id={this.numberInputId}
            value={number}
            onChange={this.handleChange}
          />
        </div>

        <button
          type="submit"
          disabled={!name}
          className={`btn btn-success ${s.formItem} ${s.formBtn}`}
        >
          <span className={s.btnText}> Add Contact</span>
        </button>
      </form>
    );
  }
}

export default AddContactForm;
