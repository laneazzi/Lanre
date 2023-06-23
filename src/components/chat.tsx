import "./chat.css";

function Chat() {
  return (
    <div className="formbold-main-wrapper">
      <div className="formbold-form-wrapper">
        <form action="mailto:elinaofumi@gmail.com" method="POST">
          <div className="formbold-mb-5">
            <label className="formbold-form-label"> Email Address </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              className="formbold-form-input"
            />
          </div>

          <div className="formbold-mb-5">
            <label className="formbold-form-label"> Subject </label>
            <input
              type="text"
              name="subject"
              id="subject"
              placeholder="Enter your subject"
              className="formbold-form-input"
            />
          </div>

          <div className="formbold-mb-5">
            <label className="formbold-form-label"> Message </label>
            <textarea
              rows={6}
              name="message"
              id="message"
              placeholder="Type your message"
              className="formbold-form-input"
            ></textarea>
          </div>

          <div>
            <button className="formbold-btn">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Chat;
