import { useHistory,Link } from 'react-router-dom';
import "../styles/DaashboardPage.css";
const CompanyPage = () => {
  const history = useHistory();
  const companySubmitHandler = (e) => {
    e.preventDefault();
    history.push('/signin');
  };
  return (
    <form id="signupForm" className="d-flex flex-row" method="post" action="www.deployed.com">
      <div className="row">
        <h1 className="text-left col-12">Fill Your Company Details Below</h1>
        <input className="d-block col-12" name="name" type="text" placeholder="company name" required />
        <input className="d-block col-12" name="email" type="email" placeholder="Email" required />
        <input className="d-block col-12" name="number" type="text" placeholder="contact number" required />
        <input className="d-block col-12" name="password" type="password" placeholder="password" required />
        <input className="d-block col-12" name="repass" type="password" placeholder="confirm password" required />
        <input className="d-block col-12" name="website" type="text" placeholder="Website Name(optional)" />
        <textarea
          className="d-block col-12"
          name="address"
          cols="30"
          rows="10"
          placeholder="Enter Company's Address"
          required
        ></textarea>
        <div className="d-block col-12 text-center btn-group">
          <button className="btn btn-success" type="submit" onClick={companySubmitHandler}>Create!!</button>
          <Link className="btn btn-primary" to="/">Go to Home Page</Link>
        </div>
      </div>
      
    </form>
  );
};

export default CompanyPage;
