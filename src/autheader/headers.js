export default function authHeader () {
  let token = window.localStorage.getItem('tsic_token')
  if (token) {
    return {
            'Authorization': 'Bearer ' + token,
            'Content-type': 'application/x-www-form-urlencoded'
  }
  } else {
    return {
      'Authorization': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoic3VtbWFyaXplU2VydmVyIiwiZHQiOiIyMDE2LTA4LTI5VDA5OjEyOjMzLjAwMVoiLCJpYXQiOjE1OTAzNDQ2Njh9.XRgmvTKhClOGDFnCUhwK5gabmynM2IJ_QQYri5ZLeUc",
      'Content-type': 'application/json'
    }
  }
}