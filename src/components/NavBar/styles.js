const styles = theme => ({
  appBar: {
    boxShadow: 'none',
    paddingTop: '10px',
    marginTop: '-75px',
    position: 'relative',
    top: '75px',
    transition: '"0.2s ease-in-out"',
    height: '20vh',
  },
  img: {
    backgroundImage: `url("http://assets.stickpng.com/images/5842a770a6515b1e0ad75afe.png")`,
    marginRight: '4rem',
    height: '70px',
    zIndex: '100',
  },
  navItems: {
    alignSelf: 'center',
    fontSize: '16px',
    textAlign: 'center',
    padding: '1rem',
    borderRadius: '8px',
    textDecoration: 'none',
    cursor: 'pointer',
  },
  toolbar: {
    width: '100%',
  },
  navItems: {
    cursor: 'pointer',
    padding: '1rem',
    fontSize: '16px',
    alignSelf: 'center',
    textAlign: 'center',
    borderRadius: '8px',
    textDecoration: 'none',
    color: '#fff'
  },
})
export default styles;