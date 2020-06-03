import React, {useEffect} from "react";
import Form from "../components/Form";
import Notes from "../components/Notes";
import {redirectComponentHoc} from "../HOC/redirectComponentHoc";
import {showAlertAC, getNotesThunk, postNotesThunk, deleteNoteThunk} from "../redux/homeReducer";
import {connect} from "react-redux";
import {compose} from "redux";
// import Alert from "../components/Alert";

const Home = (props) => {

    useEffect(() => {
        props.getNotesThunk()
        //eslint-disable-next-line
    }, [])
    // because we don’t have useState so that our empty array depends on state

    return (
        <div className="container">
            {/*<Alert alertStatus={props.alertStatus}/>*/}
            <Form {...props}/>
            <hr/>
            {!props.notes.length
                ? 'You dont have Note'
                : <Notes {...props} notes={props.notes}/>}
        </div>
    )
}
let mapStateToProps = (state) => {
    return {
        notes: state.homeReducer.notes,
        alertStatus: state.homeReducer.alertStatus
    }
};

export default compose(connect(mapStateToProps, {
    postNotesThunk,
    deleteNoteThunk,
    showAlertAC,
    getNotesThunk
}), redirectComponentHoc)(Home);
