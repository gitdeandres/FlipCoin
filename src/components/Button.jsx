export default function Button({ onClick, disabled }) {
  return (
    <button
      className='bg-(--blue) w-40 h-10 text-lg font-semibold uppercase shadow-[0px_4px_0px_0px_#23649b] rounded-md'
      onClick={onClick}
      disabled={disabled}
    >
      Random
    </button>
  )
}