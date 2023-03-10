import React, { useContext, useEffect, useState } from "react";
import {
  Col,
  Container,
  Form,
  Row,
  Button,
  InputGroup} from "react-bootstrap";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../../Context/UserContext";
import { isEmail, isMatch, isPassword } from "../../../utils/validate";
import "../Register/register.css";
export default function RegisterForm() {
  const {
    setEmail,
    setPassword,
    setRole,
    email,
    password,
    role,
    setConfirmPassword,
    confirmPassword,
    registerUser,
  } = useContext(UserContext);

  const [visible1, setVisible1] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [emailExsistAlert, setEmailExsistAlert] = useState(false);
  const [passErr, setPassErr] = useState(false);
  const [EmailErr, setEmailErr] = useState(false);
  const [confirmPassErr, setConfirmPassErr] = useState(false);
  const [emailEmpty, setEmailEmpty] = useState(false);
  const [passEmpty, setPassEmpty] = useState(false);
  const [confirmEmpty, setConfirmEmpty] = useState(false);
  const [roleEmpty, setRoleEmpty] = useState(false);
  const [alertSuccessRegister,setAlertSuccessRegister] = useState(false)


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const handleClick1 = () => {
    setVisible1(!visible1);
  };

  const handleClick2 = () => {
    setVisible2(!visible2);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!email || email == null) {
      setEmailEmpty(true);
      return;
    } else {
      setEmailEmpty(false);
    }

    if (!password || password == null) {
      setPassEmpty(true);
      return;
    } else {
      setPassEmpty(false);
    }

    if (!confirmPassword || confirmPassword == null) {
      setConfirmEmpty(true);
      return;
    } else {
      setConfirmEmpty(false);
    }

    if (!isMatch(password, confirmPassword)) {
      setConfirmPassErr(true);
      return;
    } else {
      setConfirmPassErr(false);
    }

    if (!role || role == null) {
      setRoleEmpty(true);
      return;
    } else {
      setRoleEmpty(false);
    }

    if (!isPassword(password)) {
      setPassErr(true);
      return;
    } else {
      setPassErr(false);
    }

    if (!isEmail(email)) {
      setEmailErr(true);
      return;
    } else {
      setEmailErr(false);
    }
    if (
      isEmail(email) &&
      isPassword(password) &&
      isMatch(password, confirmPassword)
    ) {
      const userAlert = await registerUser();
      if (!userAlert) {
        setEmailExsistAlert(true);
        return;
      } else {
        setEmailExsistAlert(false);
        setEmail("")
        setPassword("")
        setConfirmPassword("")
        setAlertSuccessRegister(true)
        return;
      }
    }
  };

  return (
    <Container fluid>
      <Row className="container-register">
        <Col className="container-register-banner" md={4}>
          <h1 className="header-banner-register text-white">
            X??y d???ng <br />
            <b>
              S??? nghi???p <br />
              <span className="text-warning">th??nh c??ng</span>
            </b>{" "}
            <br />
            c??ng Xjob.Mindx
          </h1>
          <div className="circle-light-register"></div>
        </Col>
        <Col className="form-container-register" md={8}>
          <Form className="form-register text-start" onSubmit={handleSubmit}>
            <Form.Group>
              <h1 className="register mt-2 text-center form-register-header">
                {" "}
                ????NG K??
              </h1>
              <Row>
                <Form.Label />{" "}
                <b>
                  ?????a ch??? Email <span style={{ color: "red" }}>*</span>
                </b>
                <InputGroup className="input-group-register">
                  <Form.Control
                    className="input-register"
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                  />
                </InputGroup>
                {emailExsistAlert && <p className="text">Email ???? t???n t???i</p>}
                {emailEmpty && (
                  <p className="text">Email kh??ng ???????c ????? tr???ng</p>
                )}
                {EmailErr && (
                  <p className="text"> H??y nh???p email ????ng ?????nh d???ng</p>
                )}
              </Row>

              <Row>
                <Form.Label className="mt-2" />{" "}
                <b>
                  M???t kh???u <span style={{ color: "red" }}>*</span>
                </b>
                <InputGroup className="input-group-register">
                  <Form.Control
                    className="input-register"
                    value={password}
                    type={visible1 ? "text" : "password"}
                    onChange={(event) => setPassword(event.target.value)}
                  />
                  <InputGroup.Text
                    className="input_icon"
                    onClick={handleClick1}
                  >
                    {visible1 ? <MdVisibility /> : <MdVisibilityOff />}
                  </InputGroup.Text>
                </InputGroup>
                {passEmpty && (
                  <p className="text">M???t kh???u kh??ng ???????c ????? tr???ng</p>
                )}
                {passErr && (
                  <p className="text">
                    M???t kh???u ph???i bao g???m 1 ch??? s???, 1 k?? t??? ?????c bi???t, 1 ch??? hoa,
                    1 ch??? th?????ng v?? c?? ??t nh???t 8 k?? t???
                  </p>
                )}
              </Row>

              <Row>
                <Form.Label className="mt-2" />{" "}
                <b>
                  X??c nh???n m???t kh???u <span style={{ color: "red" }}>*</span>
                </b>
                <InputGroup className="input-group-register">
                  <Form.Control
                    className="input-register"
                    value={confirmPassword}
                    type={visible2 ? "text" : "password"}
                    onChange={(event) => setConfirmPassword(event.target.value)}
                  />
                  <InputGroup.Text
                    className="input_icon"
                    onClick={handleClick2}
                  >
                    {visible2 ? <MdVisibility /> : <MdVisibilityOff />}
                  </InputGroup.Text>
                </InputGroup>
                {confirmEmpty && (
                  <p className="text">X??c nh???n m???t kh???u kh??ng ???????c ????? tr???ng</p>
                )}
                {confirmPassErr && (
                  <p className="text">
                    M???t kh???u v?? x??c nh???n m???t kh???u ph???i tr??ng kh???p
                  </p>
                )}
              </Row>

              <Row>
                {["radio"].map((type) => (
                  <div key={`inline-${type}`} className="m-3">
                    <Row>
                      <Col sm={5} md={5}>
                        <Form.Check
                          inline
                          label="???ng vi??n"
                          value="candidate"
                          name="group1"
                          type={type}
                          id={`inline-${type}-1`}
                          onChange={(event) => setRole(event.target.value)}
                        />
                      </Col>

                      <Col sm={1} md={1}></Col>

                      <Col>
                        <Form.Check
                          inline
                          label="Nh?? tuy???n d???ng"
                          value="recruiter"
                          name="group1"
                          type={type}
                          id={`inline-${type}-2`}
                          onChange={(event) => setRole(event.target.value)}
                        />
                      </Col>
                    </Row>
                  </div>
                ))}
                {roleEmpty && (
                  <p className="text">Vai tr?? kh??ng ???????c ????? tr???ng</p>
                )}
              </Row>

              <Row className="text-center">
                <Link to={"/login"}> ???? c?? t??i kho???n? </Link>
              </Row>

              <Row className="mt-2">
                {alertSuccessRegister ? ( <Button className="button-submit disabled" type="submit">
                  {" "}
                  ????ng k??{" "}
                </Button>) : ( <Button className="button-submit" type="submit">
                  {" "}
                  ????ng k??{" "}
                </Button>)}
               
                {alertSuccessRegister && ( <div className="alert-success-register">
                    <p className="text-success-register">????ng k?? t??i kho???n th??nh c??ng.{" "}
                      <Link className="navigate-update" to={"/update_info"}>Nh???n v??o</Link> ????? ti???p t???c c???p nh???t th??ng tin
                    </p>
                </div>)}
              </Row>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
