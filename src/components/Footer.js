import logo_white from "../assets/logo_white.png";

function Footer () {

	return (
		<div className="footer">
			<img src={logo_white} alt="logo_footer" className="logo_footer"></img>
			<p className="mentions">© 2020 Kasa. All rights reserved</p>
		</div>
	)
};
export default Footer;