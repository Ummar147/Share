import dummyData from './dummyData';

const initialState = {
  topics: dummyData.topics,
};

const topicReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SOME_ACTION_TYPE':
      // Modify the state based on the action
      return {
        ...state,
        // Update specific properties in the state
      };

    // Add more cases for other actions if needed

    default:
      return state; // Return the current state for unhandled actions
  }
};

export default topicReducer;
