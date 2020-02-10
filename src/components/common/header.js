import React from "react";

function Header() {
    return (
        <nav>
            <button>
                <a href="/">Home</a>
            </button> |
            <button>
                <a href="/courses">Courses</a>
            </button> |
            <button>
                <a href="/about">About</a>
            </button>


        </nav>
    )
}

export default Header