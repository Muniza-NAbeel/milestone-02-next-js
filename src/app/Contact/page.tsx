export default function Contact() {
  return (
      <div className="contact-container">
          <div className="contact-box">
              <h1 className="contact-heading">Contact Page</h1>

              <form className="contact-form">
                  <input type="text" name="name" placeholder="Your Name" required className="contact-input" />
                  <input type="email" name="email" placeholder="Your Email" required className="contact-input" />
                  <input type="number" name="phone" placeholder="Phone Number" required className="contact-input" />
                  <textarea placeholder="Your Message" required className="contact-textarea"></textarea>
                  <input type="submit" value="Submit" className="contact-submit" />
              </form>
          </div>
      </div>
  );
}
