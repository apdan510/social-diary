import React from 'react';
import { connect } from 'react-redux';

import StoryForm from './StoryForm';
import { startEditStory, startDeleteStory } from '../actions/stories';

class EditStoryPage extends React.Component {
  onSubmitHandle = story => {
    this.props
      .startEditStory(this.props.story.id, story)
      .then(e => this.props.history.push(e.id ? `/read/${e.id}` : '/myStory'));
  };

  render() {
    return (
      <div>
        <StoryForm
          title="Edit Story"
          story={this.props.story}
          submitBtnTitle="Edit Story"
          onSubmit={this.onSubmitHandle}
        />
      </div>
    );
  }
}

const mapStateToProp = (state, props) => {
  const story = state.stories.find(e => e.id === props.match.params.id);
  return { story };
};

const mapDispatchToProp = dispatch => ({
  startEditStory: (id, updates) => dispatch(startEditStory(id, updates)),
  startDeleteStory: id => dispatch(startDeleteStory(id))
});

export default connect(mapStateToProp, mapDispatchToProp)(EditStoryPage);
