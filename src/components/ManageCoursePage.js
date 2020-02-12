import React, { useState, useEffect } from "react";
import * as courseApi from "../api/courseApi";

import {Prompt} from "react-router-dom";
import CourseForm from "./CourseForm";
import { toast } from "react-toastify";

function ManageCoursePage(props) {
    const [errors, setErrors] = useState({});
    const [course, setCourse] = useState({
        id: null,
        slug: "",
        title: "",
        authorId: null,
        category: ""
    });

    useEffect( () => {
       const slug = props.match.params.slug; // from the path '/courses/:slug
        if (slug) {
            courseApi.getCourseBySlug(slug)
                .then(_course => setCourse(_course));
        }
    }, [props.match.params.slug]);

    
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

    function formIsValid() {
        const _errors = {};

        if (!course.title) _errors.title = "Title is required";
        if (!course.authorId) _errors.authorId = "Author is required";
        if (!course.category) _errors.category = "Category is required";

        setErrors(_errors);
        // form is valid if errors object has no properties.

        return Object.keys(_errors).length === 0;
    }

    function handleSubmit(event) {
        event.preventDefault();
        if (!formIsValid()) return;
        courseApi.saveCourse(course)
            .then( () => {
                props.history.push("/courses");
                toast.success("Course Saved");
            });
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
                onSubmit={handleSubmit}
                errors = {errors}
            />
        </>
    )
}

export default ManageCoursePage