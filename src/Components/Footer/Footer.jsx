

const Footer = () => {
    return (
      <div className="bg-white py-10 container mx-auto my-5 text-black ">
        <h2>Gadget Heaven</h2>
        <p className=" w-1/2 mx-auto border-b border-dashed">Leading the way in cutting-edge technology and innovation.</p>
     
        <footer className="footer p-10">
  <nav>
    <h6 className="footer-title">Services</h6>
    <a className="link link-hover">Product Support</a>
    <a className="link link-hover">Order Tracking</a>
    <a className="link link-hover">Shipping & Delivery</a>
    <a className="link link-hover">Returns</a>
  </nav>
  <nav>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Careers</a>
    <a className="link link-hover">Contact</a>
  </nav>
  <nav>
    <h6 className="footer-title">Legal</h6>
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer>
</div>
    );
};

export default Footer;
