const LayoutCentered = ({children}) => {
  return (
    <>
    <div className="fhrs-layout">
    <div className="fhrs-layout__container">
      <div className="fhrs-layout__row">
        <div className="fhrs-layout__center">
          {children}
        </div>
      </div>
    </div>
    </div>
    </>
  )
}

export default LayoutCentered;