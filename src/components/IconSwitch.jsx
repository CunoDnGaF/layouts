const IconSwitch = ({icon , onSwitch}) => {
  return (
    <div className="switch-icon">
      <button
        type="button" 
        onClick={onSwitch}
        className="switch-icon-btn"
      >
        {icon}
      </button>
    </div>
  )
}

export default IconSwitch;