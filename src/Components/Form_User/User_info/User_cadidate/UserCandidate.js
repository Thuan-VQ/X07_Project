import React, { useContext, useEffect, useState } from "react";
import {
  Row,
  Col,
  Form,
  Button,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { MdAccountCircle } from "react-icons/md";
import { UserContext } from "../../../../Context/UserContext";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import {
  candidateAddress,
  candidateAge,
  candidateDes,
  candidateEmail,
  candidateGender,
  candidateName,
  candidatePhone,
  canidateCategory,
  isEmail,
  isVietnamesePhoneNumberValid,
} from "../../../../utils/validate";
import "../User_cadidate/candidate.css";
import { getApiHost, getApiHostImage } from "../../../../config";
import { Radio } from "antd";

export default function UserCandidate() {
  const {
    name,
    setName,
    emailCandidate,
    setEmailCandidate,
    gender,
    setGender,
    age,
    setAge,
    phone,
    setPhone,
    address,
    setAddress,
    categoryUser,
    setCategoryUser,
    description,
    setDescription,
    updateCandidateInfo,
    setShowLogin
  } = useContext(UserContext);

  const [nameEmpty, setNameEmpty] = useState(false);
  const [genderEmpty, setGenderEmpty] = useState(false);
  const [ageEmpty, setAgeEmpty] = useState(false);
  const [phoneEmpty, setPhoneEmpty] = useState(false);
  const [addressEmpty, setAddressEmpty] = useState(false);
  const [emailEmpty, setEmailEmpty] = useState(false);
  const [EmailErr, setEmailErr] = useState(false);
  const [categoryEmpty, setCategoryEmpty] = useState(false);
  const [descriptEmpty, setDescriptEmpty] = useState(false);
  const [ageErr, setAgeErr] = useState(false);
  const [phoneErr, setPhoneErr] = useState(false);
  const [categories, setCategories] = useState([]);
  const [selectedFile, setSelectedFile] = useState();
  const [imageData, setImageData] = useState("");
  const [imageFile, setImageFile] = useState(false);
  const [token, setToken] = useState("");
  const [ckEditorOutput, setCkEditorOutput] = useState(null);
  const [succes, setSucces] = useState(false);
  const [alertUpdate, setAlertUpdate] = useState(false);

  useEffect(() => {
    getAllCategory();
    setSucces(false);
    const getToken = JSON.parse(localStorage.getItem("token"));
    setToken(getToken);
    const user = JSON.parse(localStorage.getItem("currentUser"));
    if (user.avatar) {
      const splitString = user.avatar.split("/");
      const imageString = splitString[1] + "/".concat(splitString[2]);
      setImageData(imageString);
    }
    if (user.info) {
      setName(user.info.fullName);
      setGender(user.info.gender);
      setAge(user.info.age);
      setPhone(user.info.phoneNumber);
      setEmailCandidate(user.email);
      setAddress(user.info.address);
      setCategoryUser(user.category);
      setCkEditorOutput(user.info.description);
    }
    if (!user.info) {
      setName("");
      setGender("");
      setAge("");
      setPhone("");
      setEmailCandidate("");
      setAddress("");
      setCategoryUser("");
      setDescription("");
    }
  }, []);
  console.log(description);
  const getAllCategory = async () => {
    const all = await fetch(getApiHost() + `users/category`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setCategories(data);
      });
    return all;
  };
  const getFile = (e) => {
    setSelectedFile(e.target.files[0]);
  };
  const checkFileType = (string) => {
    if (string === "png") {
      setImageFile(false);
      return;
    } else if (string === "jpeg") {
      setImageFile(false);
      return;
    } else if (string === "jpg") {
      setImageFile(false);
      return;
    } else if (string === "jfif") {
      setImageFile(false);
      return;
    } else {
      setImageFile(true);
    }
    return;
  };
  const handleSubmitAvarta = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append("formFile", selectedFile);
    const uploadImage = await fetch(getApiHost() + "users/upload-single-file", {
      method: "POST",
      body: formData,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        const splitString = data.split("/");
        const stringCheck = splitString[2].split(".");
        checkFileType(stringCheck[1]);
        const imageString = splitString[1] + "/".concat(splitString[2]);
        setImageData(imageString);
        let user = localStorage.getItem("currentUser");
        user = JSON.parse(user);
        user.avatar = data;
        localStorage.setItem("currentUser", JSON.stringify(user));
        return data;
      });
    return uploadImage;
  };

  const handleSubmitUpdateCandidate = async (event) => {
    event.preventDefault();
    if (!candidateName(name)) {
      console.log(name);
      setNameEmpty(true);
      return;
    } else {
      setNameEmpty(false);
    }

    if (!candidateGender(gender)) {
      setGenderEmpty(true);
      return;
    } else {
      setGenderEmpty(false);
    }

    if (!candidateAge(age)) {
      setAgeEmpty(true);
      return;
    } else {
      setAgeEmpty(false);
    }

    if (!candidatePhone(phone)) {
      setPhoneEmpty(true);
      return;
    } else {
      setPhoneEmpty(false);
    }

    if (!isVietnamesePhoneNumberValid(phone)) {
      setPhoneErr(true);
      return;
    } else {
      setPhoneErr(false);
    }
    if (!candidateEmail(emailCandidate)) {
      setEmailEmpty(true);
      return;
    } else {
      setEmailEmpty(false);
    }
    if (!isEmail(emailCandidate)) {
      setEmailErr(true);
      return;
    } else {
      setEmailErr(false);
    }
    if (!candidateAddress(address)) {
      setAddressEmpty(true);
      return;
    } else {
      setAddressEmpty(false);
    }

    if (!canidateCategory(categoryUser)) {
      setCategoryEmpty(true);
      return;
    } else {
      setCategoryEmpty(false);
    }
    if (!candidateDes(ckEditorOutput)) {
      setDescriptEmpty(true);
      return;
    } else {
      setDescriptEmpty(false);
    }
    const update = await updateCandidateInfo(ckEditorOutput);
    if (update.ok == false) {
      setAlertUpdate(true);
      return;
    } else {
      setAlertUpdate(false);
      setSucces(true);
      setShowLogin(false);
    }
    // navigate("/");
  };
  const handleCancelUpload = () => {
    setSucces(false);
  };
  return (
    <div class="form-container-candidate">
      <div className="form-candidate-content">
        <div className="form-candidate-description">
          <h1 className="form-candidate-header"> T??i kho???n</h1>
          <p className="form-candidate-header-content">
            H??y c???p nh???t th??ng tin m???i nh???t.
          </p>
        </div>
        <div className="upload-avarta-container">
          <div className="avarta">
            {imageData ? (
              <img
                className="image-avarta"
                src={getApiHostImage() + `${imageData}`}
              ></img>
            ) : (
              <MdAccountCircle className="icon-avarta"></MdAccountCircle>
            )}
          </div>
          <form className="form-upload-avarta" onSubmit={handleSubmitAvarta}>
            <input
              type="file"
              name="formFile"
              accept="image/png, image/gif, image/jpeg, image/jfif"
              onChange={getFile}
            ></input>
            <button className="submit-img" type="submit">
              L??u
            </button>
          </form>
        </div>
      </div>
      <Form
        className="p-2 text-start form-candidate"
        onSubmit={handleSubmitUpdateCandidate}
      >
        <Form.Group>
          <h1 className="form-candidate-header"> Th??ng tin ???ng vi??n </h1>
          <Row>
            <Col sm={6} md={6}>
              <Row className="text-start">
                <Form.Label />{" "}
                <b>
                  H??? v?? T??n<span style={{ color: "red" }}>*</span>{" "}
                </b>
                <Form.Control
                  className="input ms-2"
                  type="text"
                  maxLength={100}
                  defaultValue={name}
                  onChange={(event) => setName(event.target.value)}
                />
                {nameEmpty && (
                  <p className="text"> H??? v?? T??n kh??ng ???????c ????? tr???ng</p>
                )}
              </Row>
            </Col>

            <Col sm={6} md={6}>
              <Row className="ms-1">
                <Form.Label />{" "}
                <b>
                  {" "}
                  Gi???i t??nh<span style={{ color: "red" }}>*</span>{" "}
                </b>
                <div className="radio-gender">
                  <Radio.Group
                    name="radiogroup"
                    value={gender}
                    onChange={(e) => {
                      // console.log("gender", gender);
                      setGender(e.target.value);
                    }}
                  >
                    <Radio value="Nam">Nam</Radio>
                    <Radio value="N???">N???</Radio>
                  </Radio.Group>
                </div>
                {genderEmpty && (
                  <p className="text"> Gi???i t??nh kh??ng ???????c ????? tr???ng</p>
                )}
              </Row>
            </Col>
          </Row>

          <Row>
            <Col sm={6} md={6}>
              <Row className="text-start">
                <Form.Label />{" "}
                <b>
                  {" "}
                  Tu???i <span style={{ color: "red" }}>*</span>{" "}
                </b>
                <Form.Control
                  className="input ms-2"
                  type="number"
                  min={18}
                  max={100}
                  defaultValue={age}
                  onChange={(event) => setAge(event.target.value)}
                />
                {ageEmpty && <p className="text"> Tu???i kh??ng ???????c ????? tr???ng</p>}
                {ageErr && <p className="text"> Tu???i kh??ng ???????c nh??? h??n 18</p>}
              </Row>
            </Col>

            <Col sm={6} md={6}>
              <Row className="ms-1">
                <Form.Label />{" "}
                <b>
                  {" "}
                  S??? ??i???n tho???i<span style={{ color: "red" }}>*</span>{" "}
                </b>
                <Form.Control
                  className="input ms-2"
                  type="text"
                  defaultValue={phone}
                  onChange={(event) => setPhone(event.target.value)}
                />
                {phoneEmpty && (
                  <p className="text"> S??? ??i???n tho???i kh??ng ???????c ????? tr???ng</p>
                )}
                {phoneErr && (
                  <p className="text"> H??y nh???p s??? ??i???n tho???i Vi???t Nam</p>
                )}
              </Row>
            </Col>
          </Row>

          <Row className="row-form">
            <Form.Label />{" "}
            <b>
              {" "}
              Email<span style={{ color: "red" }}>*</span>{" "}
            </b>
            <Form.Control
              className="input ms-2"
              type="text"
              maxLength={200}
              defaultValue={emailCandidate}
              onChange={(event) => setEmailCandidate(event.target.value)}
            />
            {emailEmpty && <p className="text"> Email kh??ng ???????c ????? tr???ng</p>}
            {EmailErr && <p className="text">Nh???p ????ng ?????nh d???ng Email</p>}
          </Row>

          <Row className="row-form">
            <Form.Label />{" "}
            <b>
              {" "}
              ?????a ch???<span style={{ color: "red" }}>*</span>{" "}
            </b>
            <Form.Control
              className="input ms-2"
              type="text"
              maxLength={200}
              defaultValue={address}
              onChange={(event) => setAddress(event.target.value)}
            />
            {addressEmpty && (
              <p className="text"> ?????a ch??? kh??ng ???????c ????? tr???ng</p>
            )}
          </Row>

          <Row className="row-form">
            <Form.Label />{" "}
            <b>
              L??nh v???c<span style={{ color: "red" }}>*</span>
            </b>
            <Form.Select
              className="input ms-2"
              defaultValue={categoryUser._id}
              onChange={(event) => setCategoryUser(event.target.value)}
            >
              <option value={categoryUser._id}>{categoryUser.name}</option>
              {categories?.map((item, index) => {
                // console.log(item._id);
                return (
                  <option key={index} value={item._id}>
                    {item.name}
                  </option>
                );
              })}
            </Form.Select>
            {categoryEmpty && (
              <p className="text"> L??nh v???c kh??ng ???????c ????? tr???ng</p>
            )}
          </Row>

          <Row className="row-form">
            <Form.Label />{" "}
            <b>
              {" "}
              M?? t??? b??? sung<span style={{ color: "red" }}>*</span>{" "}
            </b>
            <CKEditor
              editor={ClassicEditor}
              data={ckEditorOutput}
              onChange={(event, editor) => setCkEditorOutput(editor.getData())}
              style={{ padding: "20px" }}
            />
            {descriptEmpty && (
              <p className="text"> M?? t??? kh??ng ???????c ????? tr???ng</p>
            )}
          </Row>
          {succes && (
            <div className="noti-upload-succes">
              <Form.Text className="form-text-alert">
                C???p nh???t th??ng tin th??nh c??ng.{" "}
                <Link to={"/"} className="link-home">
                  Quay v??? trang ch???
                </Link>
              </Form.Text>
            </div>
          )}
          {alertUpdate && (
            <div className="noti-upload-succes">
              <Form.Text className="form-text-alert">
                H??? th???ng ??ang c?? v???n ?????, h??y ????ng nh???p l???i.{" "}
                <Link to={"/login"} className="link-home">
                  ????ng nh???p
                </Link>
              </Form.Text>
            </div>
          )}

          <Row className="mt-5">
            <Col sm={3} md={3}>
              {" "}
            </Col>
            <Col sm={3} md={3}>
              {succes ? (
                <Button className="button disabled" type="submit">
                  {" "}
                  C???p nh???t{" "}
                </Button>
              ) : (
                <Button className="button" type="submit">
                  {" "}
                  C???p nh???t{" "}
                </Button>
              )}
            </Col>
            <Col sm={3} md={3}>
              <Link>
                <Button variant="light" onClick={() => handleCancelUpload()}>
                  {" "}
                  H???y b???{" "}
                </Button>
              </Link>
            </Col>
          </Row>
        </Form.Group>
      </Form>
    </div>
  );
}
