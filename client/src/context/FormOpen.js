import React from 'react'

export const Context = React.createContext({});

const Provider = (props) => {
    // this state will be shared with all components 
    const [studentOpen, setStudentOpen] = React.useState(false);
    const [teacherOpen, setTeacherOpen] = React.useState(false);
    
    const userContext = {
        studentOpen, 
        setStudentOpen,
        teacherOpen,
        setTeacherOpen
    }

return (
            // this is the provider providing state
            <Context.Provider value={userContext}>{props.children}</Context.Provider>
);

}
export default Provider;