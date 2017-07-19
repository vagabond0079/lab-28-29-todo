import React from 'react';

class NoteCreateForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      editing: false,
      completed: false,
      content: '',
    };
  }

  handleChange(e){
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.handleNoteCreate(this.state);
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit} >
        <input
          name='content'
          type='text'
          value={this.state.content}
          onChange={this.handleChange}
        />

        <button type='submit'> + </button>

      </form>
    );
  }
}

export default NoteCreateForm;
