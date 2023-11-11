const FooterTwo = () => {
  return (
   <section style={{textAlign : 'center'}}>
    <div className="fTwo" style={style.one}>
      <div>
        <h1>About OmeeNee</h1>
        <h2>
          <a href="#">About OmeeNee</a>
        </h2>
        <h2>
          <a href="#">About OmeeNee</a>
        </h2>
        <h2>
          <a href="#">OmeeNee Careers</a>
        </h2>
      </div>
      <div>
        <h1>Make money with OmeeNee</h1>
        <h2>
          <a href="#">Sell on OmeeNee</a>
        </h2>
        <h2>
          <a href="#">Become a logistics partner</a>
        </h2>
        <h2>
          <a href="#">Become a brand ambassador</a>
        </h2>
        <h2>
          <a href="#">Become an investor</a>
        </h2>

      </div>
      <div>
         <h2>Projects for Partnerships</h2>
         <h2>
          <a href="#">Boxable</a>
        </h2>
        <h2>
          <a href="#">Errand Boy</a>
        </h2>
        <h2>
          <a href="#">My Barn</a>
        </h2>
      </div>
    </div>
    <div style={style.two}>
      <div style={{
          margin : '0 auto '
         }}>
         <h2 >
         <span style={{marginRight : '1rem'}}> Join us on all platforms</span>
      
         <span>Payments methods to include crypto soon</span>
         </h2>

      </div>     

      </div>
       <h2>Designed by OmniDev</h2>

      </section>
  );
};

const style = {
   one : {
      display : 'flex',
      justifyContent : 'space-around',
      padding : '3rem'
   },
   two : {
      display :'flex',
      // justifyContent : 'space-around',
      textAlign :'center',
      marginBottom : '2rem',
   }
}

export default FooterTwo;
