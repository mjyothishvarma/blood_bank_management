const initialState = {
    employee: {
        username: "",
        password: "",
    },
};

const employeeReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_EMPLOYEE":
            return {
                ...state,
                employee: action.payload,
            };
        default:
            return state;
    }
};

export const setEmployee = (payload) => ({
    type: "SET_EMPLOYEE",
    payload,
});

export default employeeReducer;
