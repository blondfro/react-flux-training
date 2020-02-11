import React, { useState } from "react";
import {Prompt} from "react-router-dom";
import CourseForm from "./CourseForm";

function ManageCoursePage(props) {
    const [course, setCourse] = useState({
        id: null,
        slug: "",
        title: "",
        authorId: null,
        category: ""
    });

    function handleChange({target}) {
        /*
            by putting the target in {} it is the same as doing this:
            target = event.target.  This is Javascript de-structoring.
            This can also be use in the code below by changing it from:
            const updatedCourse = {...course, [target.name]: target.value};
        setCourse(updatedCourse);
            to this:
            setCourse({...course,
                [target.name]: target.value}
                );
         */
        setCourse({...course,
                [target.name]: target.value}
                );
    }

    return (
        <>
            <h2>
                Manage Course
            </h2>

            <Prompt
                when={false}
                message="Are you sure you want to leave this page?"
            />
            <CourseForm
                course={course}
                onChange={handleChange}
            />
        </>
    )
}

export default ManageCoursePage