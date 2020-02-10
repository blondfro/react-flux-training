import React from "react";
import {Prompt} from "react-router-dom";

function ManageCoursePage(props) {
    return (
        <>
            <h2>
                Manage Course
            </h2>
            <Prompt
                when={false}
                message="Are you sure you want to leave this page?"
            />
            {props.match.params.slug}
        </>
    )
}

export default ManageCoursePage