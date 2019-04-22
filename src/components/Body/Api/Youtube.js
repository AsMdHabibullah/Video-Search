import axios from 'axios';


const API_KEY = 'AIzaSyDmmQ-gocGcg88k04tp_vYAt8QJXmP4UxA';

export default axios.create({
    baseURL : 'https://www.googleapis.com/youtube/v3',
    params :{
        part: 'snippet',
        maxResults: 5,
        key : API_KEY
    }
});
