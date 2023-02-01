import React from "react";
import uuid from 'react-uuid'

const UserData = [
    {
        "_id" : uuid(),
        "email" : "trantoan11011996@gmail.com",
        "user_role" : "recruiter",
        "user_info" : {},
        "user_status" : 0,
    },
    {
        "_id" : uuid(),
        "email" : "quangthuan@gmail.com",
        "user_role" : "candidate",
        "user_info" : {},
        "user_status" : 0,
    }
]

export {UserData}