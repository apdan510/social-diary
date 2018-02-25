import React from 'react';
import { connect } from 'react-redux';

import StoryList from './StoryList';
import FilterPage from './filterPage';
import { filterStories } from '../selectors/filters';
import { getMyStories } from '../selectors/stories';

const MyStoryPage = props => (
  <div>
    <FilterPage  heading="My Story" />
    <StoryList nextUrl="/edit/" stories={props.stories} />
  </div>
);

const mapStateToProp = state => ({
  stories: filterStories(getMyStories(state.stories, state.user.uid), state.filters)
});

export default connect(mapStateToProp)(MyStoryPage);
