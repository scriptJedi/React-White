import "../assets/Form.css";
// import thanks from "../assets/php/thanks.php";

const Form = () => {
  return (
    <section className="form">
      <div className="container">
        <form action="../assets/php/thanks.php" className="form-board">
          <div className="form-block">
            <div className="form-wrap">
              <label htmlFor="first-name">Your First Name</label>
              <input
                name="first-name"
                className="form-input form-firstname"
                required
                placeholder="First Name"
                type="text"
              />
            </div>
            <div className="form-wrap">
              <label htmlFor="last-name">Your Last Name</label>
              <input
                name="last-name"
                className="form-input form-lastname"
                required
                placeholder="Last Name"
                type="text"
              />
            </div>
            <div className="form-wrap">
              <label htmlFor="email">Your Email</label>
              <input
                name="email"
                className="form-input form-Email"
                required
                placeholder="Email"
                type="email"
              />
            </div>
            <div className="form-wrap">
              <label htmlFor="phone">Your Phone</label>
              <input
                name="phone"
                className="form-input form-phone"
                required
                placeholder="Phone"
                type="phone"
              />
            </div>
            <div className="form-wrap form-wrap__textarea">
              <label htmlFor="textarea">Your Massage</label>
              <textarea
                name="textarea"
                className="form-input form-text"
                required
                placeholder="Some text"
                type="text"
              />
            </div>
          </div>
          <button className="form-btn">Submit</button>
        </form>
      </div>
    </section>
  );
};

export default Form;
