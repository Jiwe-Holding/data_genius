import mark from '../assets/img/futuris-mark.png'

export default function Logo({ light = false }) {
  return (
    <span className={`logo ${light ? 'logo--light' : ''}`}>
      <img className="logo__mark" src={mark} width="34" height="34" alt="" />
      <span>FUTURIS</span>
    </span>
  )
}
