import './Variation.css'

function Variation({variationColor, code, selected,changeVariation}){

  function handleClick(){
    changeVariation(code);
  }

  return(
    <div className={`variation ${selected ? "selected": ""}`} style={{backgroundColor: `${variationColor}`}} onClick={handleClick}></div>
  )
}

export default Variation