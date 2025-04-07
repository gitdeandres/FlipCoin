import CoinHead from '../assets/heads.svg';
import ShadowCoin from '../assets/shadow.svg';
import CoinTails from '../assets/tails.svg';

export default function Coin({ ref }) {
  return (
    <section
      ref={ref}
      className='relative flex flex-col gap-y-8 xs:gap-y-15 items-center transform-3d transition-transform duration-3000 ease-in-out w-full h-'
    >
      <img className='relative w-[8em] xs:w-auto h-[8em] xs:h-auto backface-hidden' src={ CoinHead } alt="Coin head" />
      <img className='absolute w-[8em] xs:w-auto h-[8em] xs:h-auto backface-hidden rotate-y-180' src={ CoinTails } alt="Coin tails" />
      <img className='w-[8em] xs:w-auto' src={ ShadowCoin } alt="Shadow coin" />
      <section className='relative transform-3d transition-transform duration-3000 ease-in-out w-full'>
        <span className='absolute block text-2xl font-semibold backface-hidden left-0 right-0'>Heads</span>
        <span className='absolute block text-2xl font-semibold backface-hidden rotate-y-180 left-0 right-0'>Tails</span>
      </section>
    </section>
  )
}