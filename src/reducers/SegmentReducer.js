export const initialState = {
    segment: {
        id: '',
        descricao: ''
    },
};

export const SegmentReducer = (state, action) => {
    switch (action.type) {
        case 'setSegment':
            return {...state, segment: action.payload.segment};
        default: 
            return state;
    };
};