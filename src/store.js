import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialState = {
  portfolioData: null, // Stores fetched portfolio data
  triggerFetch: 0, // Changing this triggers a fetch
};

const portfolioSlice = createSlice({
  name: 'portfolio',
  initialState,
  reducers: {
    setPortfolioData: (state, action) => {
      state.portfolioData = action.payload; // Update portfolio data
    },
    updateTrigger: (state) => {
      state.triggerFetch += 1; // Increment to trigger useEffect
    },
  },
});

export const { setPortfolioData, updateTrigger } = portfolioSlice.actions;

const store = configureStore({
  reducer: { portfolio: portfolioSlice.reducer },
});

export default store;
