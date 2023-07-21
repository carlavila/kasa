function Banner({ page }) {
	return (
	  <div className={page === 'home' ? 'homeBanner' : 'about-banner'}>
	    {page === 'home' ? (
	      <h1 className="bannerTitle">Chez vous, partout et ailleurs</h1>
	    ) : null}
	  </div>
	);
      }
      export default Banner;
      