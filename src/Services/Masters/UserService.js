import axios from "axios";
//import environment from '../../environments/environment';

//const roadmapApiUrl = 'http://10.39.180.230/TrafficSystemSpeedMapAPI/api/v1/roadmap';
//const roadmapApiUrl = 'http://192.168.128.119/TrafficSystemSpeedMapAPI/api/v1/roadmap';
//const ApiUrl = 'http://10.39.181.74/dailyworkApi/api/v1/users';
const ApiUrl = 'https://dailyworknodeapi.herokuapp.com/api/users';
const options = {
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    }
};
export default {

    UserSave(url = ApiUrl) {
        return {
            Save: (data) => axios.post(url, JSON.stringify(data), options)
                .then((res) => {
                    //console.log(res);
                    return res;
                },
                    (error) => {
                        // console.log(error);
                        return error;
                    }
                )
        }
    },
    CheckUserExist(url = ApiUrl) {
        return {
            checkUserid: (Userid) => axios.get(url + '/Getuser/', {
                params: { "userid": Userid }
            })
                .then((res) => {
                    //console.log(res);
                    return res;
                },
                    (error) => {
                        // console.log(error);
                        return error;
                    }
                )
        }
    }
    ,
    FetchUsers(url = ApiUrl) {
        return {
            GetAllUsers: () => axios.get(url, options)
                .then((res) => {
                    //console.log(res);
                    return res;
                },
                    (error) => {
                        // console.log(error);
                        return error;
                    }
                )
        }
    },
    DeleteUser(url = ApiUrl) {
        return {
            Delete: (_id) => axios.delete(url + '/' + _id, options)
                .then((res) => {
                    //console.log(res);
                    return res;
                },
                    (error) => {
                        // console.log(error);
                        return error;
                    }
                )
        }
    }
}