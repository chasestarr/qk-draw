import { createSelector } from 'reselect';

const populate = table => table.allIds.map(id => table.byId[id]);

const getDrawingSlice = () => state => state.drawings;

export const selectDrawings = () =>
  createSelector(getDrawingSlice(), drawings => populate(drawings));
