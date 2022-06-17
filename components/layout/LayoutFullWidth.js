const LayoutFullWidth = ({children}) => {
  return (
    <>
<div className="full-width">
  <div className="full-width__container">
    <div className="full-width__row">
      <div className="full-width__wrapper">
          {children}
        </div>
      </div>
    </div>
    </div>
    </>
  )
}

export default LayoutFullWidth;