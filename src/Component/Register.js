import React from "react";
import { Button,Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import '../App.css';

const Register = () => {
    
    const [show, setShow] =React. useState(true);
    const navigate = useNavigate();
    const closeShow = () => {
   
        navigate("/")

    }
    return (
        <div>

            <Modal show={show} >
                <div className="welcome-text">
                    <Modal.Header ><h3 >welcome</h3></Modal.Header>
                </div>
                <div >

                    <Modal.Body >
                        <div >
                            <div className="d-flex justify-content-around user-text">
                            </div>
                            <div>

                                <form>
                                    <div className="form-group">
                                        <label for="exampleInputEmail1">UserName</label>
                                        <input type="text" className="form-control" placeholder="Enter Your Name" name="fullname" />

                                    </div>
                                    <div className="form-group">
                                        <label for="exampleInputEmail1">Email address</label>
                                        <input type="email" className="form-control" placeholder="Enter email" name="user_name" />

                                    </div>
                                    <div className="form-group">
                                        <label for="exampleInputPassword1">Password</label>
                                        <input type="password" className="form-control" placeholder="Password" name="password" />
                                    </div>
                                    <div className="form-group">
                                        <label for="exampleInputPassword1">ConfirmPassword</label>
                                        <input type="password" className="form-control" placeholder="Password" />
                                    </div>

                                    <div className="login-button">
                                        <button type="submit" className="btn btn-primary" >Submit</button>
                                    </div>
                                </form>

                            </div>

                        </div>
                    </Modal.Body>

                </div>
                <Modal.Footer>
                    <Button onClick={() => closeShow()}> Back to Home</Button>
                </Modal.Footer>
            </Modal>

        </div>


    )
}
export default Register;