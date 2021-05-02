import React, { useEffect, useState } from "react";
import { Table } from "reactstrap";
import { withStyles } from "@material-ui/styles";
import { getLands as getLandsAPI } from "../api";
import { useCookies } from "react-cookie";
import { useHistory } from "react-router-dom";

// const landRecords = [
//     {
//         id: "1",
//         name: "A",
//     },
//     {
//         id: "2",
//         name: "B",
//     },
//     {
//         id: "3",
//         name: "C",
//     },
//     {
//         id: "4",
//         name: "D",
//     },
// ];

const styles = {
    container: {
        color: "#454d55",
        minHeight: "100vh",
    },
};

const Home = (props) => {
    const { classes } = props;
    const history = useHistory();
    const [landRecords, setLandRecords] = useState([]);
    const [cookies, setCookie] = useCookies(["token"]);

    const getLands = () => {
        // console.log("cookies", cookies?.token);
        getLandsAPI({}, cookies?.token)
            .then((response) => {
                // console.log(response?.data);
                setLandRecords(response?.data?.data);
            })
            .catch((error) => {
                console.log(error);
                alert("Invalid token!");
                history.push("/");
            });
    };

    useEffect(() => {
        getLands();
    }, []);

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
                            {landRecords?.map((record) => {
                                return (
                                    <tr>
                                        <td scope="row">{record.id}</td>
                                        <td>{record.name}</td>
                                        <td>
                                            <a
                                                // href="#"
                                                style={{
                                                    color: "white",
                                                    cursor: "pointer",
                                                }}
                                                onClick={() => {
                                                    history.push({
                                                        pathname: `/land/${record.id}`,
                                                        state: {
                                                            record: record,
                                                        },
                                                    });
                                                }}
                                            >
                                                View Details
                                            </a>
                                        </td>
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
