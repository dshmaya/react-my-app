import axios from 'axios'

var getUsers = function(url)
{
    return  axios.get(url);
}

export default {getUsers}