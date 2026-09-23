// The band where daylight gives way to night, or (dawn) night back to day.
export default function Horizon({ children, note, dawn = false }) {
  return (
    <div className={`horizon${dawn ? ' dawn' : ''}`}>
      {children ? <p>{children}</p> : null}
      {note ? <small>{note}</small> : null}
    </div>
  )
}
