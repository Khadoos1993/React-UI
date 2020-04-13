import axios from 'axios';

export function getAuthors() {
    return axios.get('http://localhost:5008/api/authors',
        // headers: {Authorization: `Bearer ${accessToken}`}
    )
      .then(response =>{
          if(response.status === 200)
            return response.data;
      })
      .catch(error =>{
        console.error("API call failed. " + error);
        throw error;
      });
}

export function saveAuthor(author){
    //const data = JSON.stringify(author);
    return axios.put(`http://localhost:5008/api/authors/${author.id}`,author, {
        headers:{'Content-Type': "application/json"}
    }).then(response =>{
        return response.data;
    }).catch(error =>{
        throw error;
    })
}