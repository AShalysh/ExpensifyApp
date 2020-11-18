// setTextFilter action generator
export const setTextFilter = ( text = '' ) => ({
    type: 'SET_TEXT_FILTER',
    text
});

//Sort by amount action generator
export const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
});

//Sort by date action generator
export const sortByDate = () => ({
    type: 'SORT_BY_DATE'
});

//Set Start Date action generator
export const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
});

//Set End Date action generator
export const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
});