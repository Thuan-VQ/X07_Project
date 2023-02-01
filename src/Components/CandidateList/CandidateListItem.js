import { Button, Image, Space } from "antd";
import React, { useContext, useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { JobContext } from "../../Context/JobContext";
import Lottie from "lottie-react"
import loadingAnimation from "../../animationJson/loading-animation.json"
import { getApiHost, getApiHostImage } from "../../config";
export default function CandidateListItem({ data, handleValue }) {

    const [status, setStatus] = useState("");
    const [downloadLink, setDownloadLink] = useState("");
    const [avatar, setAvatar] = useState("");
    const [createDate, setCreateDate] = useState("");
    const [complete, setComplete] = useState(false);
    const token = localStorage.getItem('token');
    const userToken = JSON.parse(token);
    useEffect(() => {
        if (data.status == "accepted") {
            setStatus("Đã xác nhận")
        } else if (data.status == "denied") {
            setStatus("Đã từ chối")
        } else if (data.status == "pending") {
            setStatus("Đang chờ")
        };
        const splitString = data.cv.split("/");
        const cvString = splitString[1] + "/".concat(splitString[2]);
        setDownloadLink(cvString);

        let crTime = new Date(data.createAt).getTime();
        let crDay = new Date(crTime).getDate();
        let crMonth = new Date(crTime).getMonth() + 1;
        let crYear = new Date(crTime).getFullYear();
        let newCreate = `${crDay}-${crMonth}-${crYear}`;
        setCreateDate(newCreate);
        if (data.userId.avatar) {
            let imgSplit = data.userId.avatar.split("/");
            let imgString = imgSplit[1] + "/".concat(imgSplit[2]);
            setAvatar(imgString)
        }
    }, [data]);

    const hanldeStatus = (e) => {
        setComplete(true)
        setTimeout(() => {
            setComplete(false)
        }, 2500)
        handleValue(e, data._id)
    }
    return (
        <Card className="list-item mt-3 mb-3">
            <Row>
                <Col sm={2} md={2} className="col-avatar-cv">
                    {data.userId.avatar
                        ? <img className="list-avatar-user mt-1" src={getApiHostImage() + `${avatar}`} />
                        : <Image className="list-avatar mt-1" src="https://static2.yan.vn/YanNews/2167221/202102/facebook-cap-nhat-avatar-doi-voi-tai-khoan-khong-su-dung-anh-dai-dien-e4abd14d.jpg" />
                    }
                </Col>
                <Col className="p-2">
                    <p className="mt-2"> <b>Tên ứng viên:</b> {data.userId.info.fullName} </p>
                    <p className="mt-2"> <b>Ngày gởi yêu cầu:</b> {createDate}</p>
                    <p className="mt-2"> <b>File đính kèm:</b>
                        <a href={getApiHostImage() + `${downloadLink}`} download >
                            <Button className="download-button ms-2"> <span> Tải xuống </span></Button>
                        </a>
                    </p>
                    {complete ? (
                        <div className="loading-status">
                            <p className="mt-2"> <b>Trạng thái yêu cầu:</b> </p>
                            <Lottie animationData={loadingAnimation} className="loading-animation"></Lottie>
                        </div>
                    ) : <p className="mt-2">
                        <b>Trạng thái yêu cầu:</b> 
                        {status == "Đã xác nhận" && (<span className="blue"> {status} </span>)}
                        {status == "Đã từ chối" && (<span className="red"> {status} </span>)}
                        {status == "Đang chờ" && (<span> {status} </span>)}
                    </p>
                    }

                </Col>
            </Row>

            <Row className="button-row mb-2">
                <Col sm={6} md={6}>
                </Col>
                <Col sm={6} md={6}>
                    <Space wrap className="space-wrap">
                        {status == "Đã xác nhận" || status == "Đã từ chối"
                            ? <Row>
                                <Col sm={4} md={4}></Col>
                                <Col sm={4} md={4}></Col>
                                <Col sm={4} md={4}>
                                </Col>

                            </Row>
                            : (<>
                                <button className="apply-button ms-2" value="accepted" onClick={hanldeStatus}>
                                    Xác nhận
                                </button>
                                <button className="denied-button" value="denied" onClick={hanldeStatus}>
                                    Từ chối
                                </button>
                            </>)}
                    </Space>
                </Col>
            </Row>
        </Card>
    )
}