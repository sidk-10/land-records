import React, { useState } from "react";
import { Table, Button } from "reactstrap";
import { withStyles } from "@material-ui/styles";
import { IconButton } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";

const landRecord = {
    id: "1",
    name: "A",
    area: "A",
    city: "A",
    state: "A",
    country: "A",
};

const styles = {
    container: {
        color: "#454d55",
        height: "100vh",
    },
    table: {
        color: "#fff",
    },
};

const LandEditor = () => {
    return (
        <>
            <div style={{ display: "inline-block" }} className="mr-2">
                <input
                    type="text"
                    id="landName"
                    placeholder="Enter new name"
                    className="form-control"
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
                >
                    Save
                </Button>
            </div>
        </>
    );
};

const Land = (props) => {
    const { classes } = props;
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
                                        <LandEditor />
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
