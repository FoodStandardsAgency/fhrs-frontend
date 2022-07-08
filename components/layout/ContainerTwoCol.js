const ContainerTwoCol = ({children}) => {
  return (
    <>
      <div className="two-col__right-top">
        {children}
      </div>
    </>
  )
}

export default ContainerTwoCol;