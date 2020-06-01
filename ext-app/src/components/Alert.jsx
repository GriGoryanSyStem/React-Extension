import React from "react";

const Alert = (props) => {
    return (
        <div className={`alert ${props?'alert-warning':'alert-danger'} alert-dismissible fade show`} role="alert">
            <strong>Warning!</strong>  fields below.
            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
    )
}
export default Alert;