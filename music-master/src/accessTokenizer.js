import { CLIENT_ID, CLIENT_SECRET } from './credentials';
import request from 'request';

const authOptions = {
  url: 'https://accounts.spotify.com/api/token',
  headers: {
    'Authorization': 'Basic ' + (new Buffer(`${CLIENT_ID}:${CLIENT_SECRET}`).toString('base64'))
  },
  form: {
    grant_type: 'client_credentials'
  },
  json: true
};

const accessToken = () => {
  request.post( authOptions, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      return body.access_token;
    }
  })
}

export default accessToken;
