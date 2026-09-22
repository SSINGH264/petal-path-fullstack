import "./Footer.css";

// Displays the website footer with tagline, copyright, and contact information

const Footer = () => {
 return (
    <footer className="footer">
      <p className="footer-tagline">
        Discover the path to your next floral adventure!
      </p>
      <p className="footer-text">
        © 2026 Samanta Singh
      </p>
      <table className="footer-table">
        <tbody>
          <tr>
           <td>Email:</td>
            <td>floral.petalpath@gmail.com</td>
          </tr>

          <tr>
            <td>Phone:</td>
            <td>(555) FLO-WERS</td>
          </tr>
        </tbody>
      </table>

    </footer>
  );
  
};
export default Footer;