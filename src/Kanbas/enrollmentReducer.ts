import * as db from "./Database";

const initialState = {
  enrollments: db.enrollments,
};

const enrollmentsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "enroll":
      const newId = String(Math.max(...state.enrollments.map(e => parseInt(e._id))) + 1);
      return {
        ...state,
        enrollments: [
          ...state.enrollments,
          {
            _id: newId,
            user: action.enrollment.user,
            course: action.enrollment.course
          }
        ],
      };
    case "unenroll":
      return {
        ...state,
        enrollments: state.enrollments.filter(
          (enrollment) => 
            !(enrollment.user === action.enrollment.user && 
              enrollment.course === action.enrollment.course)
        ),
      };
    default:
      return state;
  }
};

export default enrollmentsReducer;