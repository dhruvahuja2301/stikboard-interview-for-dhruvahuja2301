import React from 'react';

const Password = () => {
    return ( 
        <div className="form-group">
            <label htmlFor="password">Password</label><br />
            <input type="password" className="form-control" id="password" name="password" required />
            <div className="valid-feedback">
                Looks good!
            </div>
            <div className="invalid-feedback">
                Please provide a Password
            </div>
        </div>
     );
}
 
export default Password;