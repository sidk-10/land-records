import React from "react";
import { Table } from "reactstrap";
import { withStyles } from "@material-ui/styles";

const landRecords = [
    {
        id: "1",
        name: "A",
    },
    {
        id: "2",
        name: "B",
    },
    {
        id: "3",
        name: "C",
    },
    {
        id: "4",
        name: "D",
    },
];

const styles = {
    container: {
        color: "#454d55",
        height: "100vh",
    },
};

const Home = (props) => {
    const { classes } = props;
    return (
        <div style={{ background: "#eee" }}>
            <div className={"container " + classes.container}>
                <div className="align-items-center">
                    <div className="h3 text-center p-3 pt-5">Land Records</div>
                    <Table dark className={"shadow rounded " + classes.table}>
                        <thead>
                            <tr>
                                <td
                                    style={{
                                        borderTop: "none",
                                        fontWeight: "bold",
                                    }}
                                >
                                    ID
                                </td>
                                <td
                                    style={{
                                        borderTop: "none",
                                        fontWeight: "bold",
                                    }}
                                >
                                    Name
                                </td>
                                <td
                                    style={{
                                        borderTop: "none",
                                        fontWeight: "bold",
                                    }}
                                >
                                    Details
                                </td>
                            </tr>
                        </thead>
                        <tbody>
                            {landRecords.map((record) => {
                                return (
                                    <tr>
                                        <td scope="row">{record.id}</td>
                                        <td>{record.name}</td>
                                        <td>View Details</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </Table>
                </div>
            </div>
        </div>
    );
};

export default withStyles(styles)(Home);
