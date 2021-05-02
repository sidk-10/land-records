import React, { useState, useEffect } from "react";
import { Table, Button } from "reactstrap";
import { withStyles } from "@material-ui/styles";
import { IconButton } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import { useHistory, useLocation } from "react-router-dom";
import { useCookies } from "react-cookie";
import { editLand as editLandAPI } from "../api";
// const landRecord = {
//     id: "1",
//     name: "",
//     area: "",
//     city: "",
//     state: "",
//     country: "",
// };

const styles = {
    container: {
        color: "#454d55",
        minHeight: "100vh",
    },
    table: {
        color: "#fff",
    },
};

const LandEditor = (props) => {
    const [cookies, setCookie] = useCookies(["token"]);
    const location = useLocation();
    const history = useHistory();

    const editLandName = () => {
        let newLandName = document?.getElementById("landName")?.value;
        let newLand = props.landRecord;
        newLand.name = newLandName;
        if (newLandName == "") {
            alert("Land Name can't be empty!");
            return;
        }
        editLandAPI({ land: props.landRecord }, cookies?.token)
            .then((response) => {
                // console.log(response);
                alert("Land Name updated successfully!");
                props.setLandRecord(newLand);
                props.setEditMode(!props.editMode);
                history.replace({ ...history, state: { record: newLand } });
            })
            .catch((error) => {
                console.log(error);
            });
    };
    return (
        <>
            <div style={{ display: "inline-block" }} className="m-2">
                <input
                    type="text"
                    id="landName"
                    placeholder="Enter new name"
                    className="form-control"
                    autoFocus
                    defaultValue={props.landRecord.name}
                />
            </div>
            <div style={{ display: "inline-block" }}>
                <Button
                    className="rounded"
                    style={{
                        padding: "6px 15px",
                        boxSizing: "border-box",
                        position: "relative",
                        bottom: "2px",
                    }}
                    onClick={editLandName}
                >
                    Save
                </Button>
            </div>
        </>
    );
};

const Land = (props) => {
    const { classes } = props;
    const history = useHistory();
    const location = useLocation();
    const [landRecord, setLandRecord] = useState({
        id: "",
        name: "",
        area: "",
        city: "",
        state: "",
        country: "",
    });
    useEffect(() => {
        // console.log(location);
        try {
            setLandRecord(location.state.record);
        } catch (error) {
            history.goBack();
        }
    }, []);
    const [editMode, setEditMode] = useState(false);
    return (
        <div style={{ background: "#eee" }}>
            <div className={"container " + classes.container}>
                <div>
                    <div className="text-center p-3 pt-5">
                        <span className="h3">Land</span>
                        <IconButton
                            style={{
                                position: "relative",
                                bottom: "0.3rem",
                                // padding: 2,
                                margin: "0 5px",
                            }}
                            onClick={() => {
                                setEditMode(!editMode);
                            }}
                        >
                            <EditIcon htmlColor="#454d55" />
                        </IconButton>
                    </div>
                    <Table dark className={"shadow rounded " + classes.table}>
                        <tbody>
                            <tr>
                                <td
                                    scope="row"
                                    style={{
                                        fontWeight: "bold",
                                        borderTop: "none",
                                    }}
                                >
                                    ID
                                </td>
                                <td
                                    style={{
                                        borderTop: "none",
                                        textAlign: "center",
                                        width: "50%",
                                    }}
                                >
                                    {landRecord?.id}
                                </td>
                            </tr>
                            <tr>
                                <td scope="row" style={{ fontWeight: "bold" }}>
                                    Name
                                </td>
                                <td
                                    style={{
                                        textAlign: "center",
                                        width: "50%",
                                    }}
                                >
                                    {editMode ? (
                                        <LandEditor
                                            landRecord={landRecord}
                                            setLandRecord={setLandRecord}
                                            editMode={editMode}
                                            setEditMode={setEditMode}
                                        />
                                    ) : (
                                        landRecord?.name
                                    )}
                                </td>
                            </tr>
                            <tr>
                                <td scope="row" style={{ fontWeight: "bold" }}>
                                    Area
                                </td>
                                <td
                                    style={{
                                        textAlign: "center",
                                        width: "50%",
                                    }}
                                >
                                    {landRecord?.area}
                                </td>
                            </tr>
                            <tr>
                                <td scope="row" style={{ fontWeight: "bold" }}>
                                    City
                                </td>
                                <td
                                    style={{
                                        textAlign: "center",
                                        width: "50%",
                                    }}
                                >
                                    {landRecord?.city}
                                </td>
                            </tr>
                            <tr>
                                <td scope="row" style={{ fontWeight: "bold" }}>
                                    State
                                </td>
                                <td
                                    style={{
                                        textAlign: "center",
                                        width: "50%",
                                    }}
                                >
                                    {landRecord?.state}
                                </td>
                            </tr>
                            <tr>
                                <td scope="row" style={{ fontWeight: "bold" }}>
                                    Country
                                </td>
                                <td
                                    style={{
                                        textAlign: "center",
                                        width: "50%",
                                    }}
                                >
                                    {landRecord?.country}
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
        </div>
    );
};

export default withStyles(styles)(Land);
