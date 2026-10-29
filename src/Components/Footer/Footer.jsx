
const Footer = () => {
  return (
    <>
      <footer className="">
        <footer className="footer text-white sm:footer-horizontal bg-black text-base-content p-10">
          <aside>
            <h2 className="font-bold text-2xl">CS-Ticket System</h2>
            <p className="w-100">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis suscipit beatae ipsam sapiente sint ipsa tenetur adipisci possimus iusto dolores.
            </p>
          </aside>
          <nav>
            <h6 className="footer-title">Company</h6>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
          </nav>
          <nav>
            <h6 className="footer-title">Service</h6>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </nav>
          <nav>
            <h6 className="footer-title">Information</h6>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </nav>
          <nav>
            <h6 className="footer-title">Social links</h6>
            <a className="link link-hover text-gray-300"><i className="fa-brands fa-square-x-twitter"></i>@CS-Ticket SYstem</a>
            <a className="link link-hover text-gray-300"><i className="fa-brands fa-facebook"></i> @CS-Ticket SYstem</a>
            <a className="link link-hover text-gray-300"><i className="fa-brands fa-linkedin-in"></i>@CS-Ticket SYstem</a>
            <a className="link link-hover text-gray-300"><i className="fa-solid fa-envelope"></i>support@cseTicketsyste.com</a>
          </nav>
        </footer>
        <footer className="text-white footer sm:footer-horizontal footer-center bg-black text-base-content p-4">
          <aside>
            <p>
              Copyright © {new Date().getFullYear()} - All right reserved by
              CS-Ticket System
            </p>
          </aside>
        </footer>
      </footer>
    </>
  );
};

export default Footer;
