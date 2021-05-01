import { withStyles } from "@material-ui/styles";
import { Button } from "reactstrap";

const styles = {
    container: {
        background: "#eee",
        padding: "auto",
        margin: "0",
        maxWidth: "2000px",
    },
};

const Login = (props) => {
    const { classes } = props;
    return (
        <div className={"container " + classes.container}>
            <div
                className="row justify-content-center align-items-center"
                style={{
                    height: "100vh",
                    width: "100vw",
                    position: "relative",
                    bottom: "5vh",
                }}
            >
                <div className="col-11 col-md-6 col-lg-4">
                    <div className="text-center p-3">
                        <span className="h3" style={{ color: "#454d55" }}>
                            Login
                        </span>
                    </div>
                    <div className="card" style={{ background: "#454d55" }}>
                        <div className="card-body">
                            <form action="" autocomplete="off">
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="username"
                                        placeholder="Username"
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="password"
                                        className="form-control"
                                        name="password"
                                        placeholder="Password"
                                    />
                                </div>
                                <Button
                                    type="button"
                                    id="sendlogin"
                                    className="rounded"
                                    style={{
                                        float: "right",
                                        padding: "6px 15px",
                                        boxSizing: "border-box",
                                        position: "relative",
                                        bottom: "2px",
                                    }}
                                >
                                    Login
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default withStyles(styles)(Login);
