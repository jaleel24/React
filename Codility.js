// handleOnSubmit = (e) => {
  //   e.preventDefault();
  //   console.log('Submitted!');
  // };

  return (<div>
            <div>
              <input type="text" 
                              className="form-control" 
                              id="username-input"                     
                              placeholder="Enter Username"
                        />
            </div>
            <div>
                <input type="password" 
                                className="form-control" 
                                id="password-input"                     
                                placeholder="Enter password"
                          />
              </div>
                <button 
                    type="submit"
                    id="login-button" 
                    className="btn btn-primary"
                   
                >
                    Submit
                </button>
  </div>);