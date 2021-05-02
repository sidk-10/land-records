import { withStyles } from "@material-ui/styles";
import { Button } from "reactstrap";
import { login as loginAPI } from "../api";
import { useCookies } from "react-cookie";
import { useHistory } from "react-router-dom";

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
    const history = useHistory();
    const [cookies, setCookie] = useCookies(["token"]);

    const login = () => {
        let username = document?.getElementById("username")?.value,
            password = document?.getElementById("password")?.value;
        if (!username || username == "") {
            alert("Enter valid username!");
            return;
        }
        if (!password || password == "") {
            alert("Password can't be empty!");
            return;
        }
        loginAPI({
            username: username,
            password: password,
        })
            .then((response) => {
                console.log(response);
                setCookie("token", response?.data?.token);
                history.push("/home");
            })
            .catch((error) => {
                console.log(error);
                alert("Invalid credentials!");
            });
    };

    return (
        <div className={"container " + classes.container}>
            <div
                className="row justify-content-center align-items-center"
                style={{
                    minHeight: "100vh",
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
                                        id="username"
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="password"
                                        className="form-control"
                                        name="password"
                                        placeholder="Password"
                                        id="password"
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
                                    onClick={login}
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
