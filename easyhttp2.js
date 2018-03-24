class EasyHTTP {

  // GET
  get(url){
    return new Promise((resolve,reject) => {
      fetch(url)
      .then(res => res.json())
      .then(data => resolve(data))
      .catch(err => reject(err));
    });
  }

  // GET
  post(url,data){
    return new Promise((resolve,reject) => {
      fetch(url,{
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(res => res.json())
      .then(data => resolve(data))
      .catch(err => reject(err));
    });
  }

  //PUT
  put(url,data){
    return new Promise((resolve,reject) => {
      fetch(url,{
        method: 'PUT',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(res => res.json())
      .then(data => resolve(data))
      .catch(err => reject(err));
    });
  }

  //DELETE
  delete(url){
    return new Promise((resolve,reject) => {
      fetch(url,{
        method: 'DELETE',
        headers: {
          'Content-type': 'application/json'
        }
      })
      .then(res => res.json())
      .then(() => resolve('Resoruce Deleted...'))
      .catch(err => reject(err));
    });
  }
}