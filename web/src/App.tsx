import './styles/main.css';
import logoImg from './assets/logo-nlw-esports.png';
import { MagnifyingGlassPlus } from 'phosphor-react';

function App() {
  return (
    <div className='max-w-[1344px] mx-auto flex flex-col items-center my-20'>
      <img src={logoImg} alt='' />

      <h1 className='text-6xl text-white font-black mt-20'>
        Seu{' '}
        <span className='bg-nlw-gradient bg-clip-text text-transparent'>
          duo
        </span>{' '}
        está aqui.
      </h1>

      <div className='grid grid-cols-6 gap-6 mt-16'>
        <a href='' className='relative rounded-lg overflow-hidden'>
          <img src='/game1.png' alt='' />

          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0'>
            <strong className='font-bold text-white block'>
              League of Legends
            </strong>
            <span className='text-zinc-300 text-sm block'>4 anúncios</span>
          </div>
        </a>
        <a href='' className='relative rounded-lg overflow-hidden'>
          <img src='/game2.png' alt='' />

          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0'>
            <strong className='font-bold text-white block'>
              League of Legends
            </strong>
            <span className='text-zinc-300 text-sm block'>4 anúncios</span>
          </div>
        </a>
        <a href='' className='relative rounded-lg overflow-hidden'>
          <img src='/game3.png' alt='' />

          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0'>
            <strong className='font-bold text-white block'>
              League of Legends
            </strong>
            <span className='text-zinc-300 text-sm block'>4 anúncios</span>
          </div>
        </a>
        <a href='' className='relative rounded-lg overflow-hidden'>
          <img src='/game4.png' alt='' />

          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0'>
            <strong className='font-bold text-white block'>
              League of Legends
            </strong>
            <span className='text-zinc-300 text-sm block'>4 anúncios</span>
          </div>
        </a>
        <a href='' className='relative rounded-lg overflow-hidden'>
          <img src='/game5.png' alt='' />

          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0'>
            <strong className='font-bold text-white block'>
              League of Legends
            </strong>
            <span className='text-zinc-300 text-sm block'>4 anúncios</span>
          </div>
        </a>
        <a href='' className='relative rounded-lg overflow-hidden'>
          <img src='/game6.png' alt='' />

          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0'>
            <strong className='font-bold text-white block'>
              League of Legends
            </strong>
            <span className='text-zinc-300 text-sm block'>4 anúncios</span>
          </div>
        </a>
      </div>

      <div className='mt-8 pt-1 bg-nlw-gradient self-stretch rounded-lg overflow-hidden'>
        <div className='bg-[#2A2634] px-8 py-6 self-stretch flex justify-between items-center'>
          <div>
            <strong className='text-2xl text-white font-black block'>
              Não encontrou o seu duo?
            </strong>
            <span className='text-zinc-400 block'>
              Publique um anúncio para encontrar novos players!
            </span>
          </div>

          <button className='py-3 px-4 bg-violet-500 text-white rounded hover:bg-violet-600 transition-all duration-300 flex items-center gap-3'>
            <MagnifyingGlassPlus size={24} />
            Publicar Anúncio
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
