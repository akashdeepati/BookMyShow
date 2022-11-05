import React, { useEffect, useState } from "react";
import { Button, Modal } from 'react-bootstrap';
import axios from 'react-dom';
import { useNavigate } from "react-router-dom";
import '../App.css';


const Login = () => {

    const [show, setShow] = useState(true);
    const [alreadyData, setAlreadyData] = useState(false);
    const [newData, setNewData] = useState(false);
    const navigate = useNavigate();

    const [data, setData] = useState([{
        fullname: "",
        user_name: "",
        user_type_id: 2,
        validated: true,
        password: "",
        user_type_id: 1,
        signup_with: "email"
    }]);
    const [fullname, user_name, password, user_type_id, signup_with] = data;

    const evenHandler = (e) => {
        // setData({ ...data, [e.target.name]: [e.target.value] });
    };

    const closeShow = () => {
        setShow(!show)
        navigate("/")

    }
    const already = () => {
        setAlreadyData(!alreadyData)
        setNewData(false)
    }
    const newMethod = () => {
        setNewData(!newData)
        setAlreadyData(false)
    }
    const newSubmitt = (e) => {
        e.preventDefault();
        axios.post('http://13.232.97.200:8080/signUp', {
            full_name: `${fullname}`,
            user_name: `${user_name}`,
            password: `${password}`,
            validated: 'false',
            user_type_id: `${user_type_id}`,
            signup_with: `${signup_with}`
        }).then(response => console.log(response))

    }


    return (
        <div>
            <Modal show={show}>
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
                                    <div cclassNamelass="form-group">
                                        <label for="exampleInputEmail1">Email address</label>
                                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                                    </div>
                                    <div className="form-group">
                                        <label for="exampleInputPassword1">Password</label>
                                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                                    </div>
                                    <div className="login-button">
                                        <button type="submit" className="btn btn-primary ">Submit</button>
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
export default Login;