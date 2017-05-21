import * as constants from '../constants';

const initialState = {
  byId: {},
  allIds: []
};

export default function drawingsReducer(state = initialState, action) {
  switch (action.type) {
    case constants.drawing.REQUEST_SUCCESS:
      const { drawing } = action.payload;
      return action.payload.drawings.reduce((nextState, drawing) => {
        const keyExists = nextState.byId.hasOwnProperty(drawing.key_id);
        return {
          byId: {
            ...nextState.byId,
            [drawing.key_id]: { ...drawing, id: drawing.key_id }
          },
          allIds: keyExists ? nextState.allIds : [...nextState.allIds, drawing.key_id]
        };
      }, state);
    default:
      return state;
  }
}
