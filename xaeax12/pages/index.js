import Head from 'next/head'

export default function Home() {
  return (
    <>
    <Head>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
    </Head>
    <div class='block justify-center headerpedro'>
      <h1 class='antialiased text-center pb-1 pt-6 text-red-500 font-bold text-4xl shadow-lg'>X AE A-12!</h1>
    </div>

    <div class='flex inline justify-center headerpedro justify-self-center pb-2'>
      <div class='py-4 px-2'>
      <button class='rounded p-3 pedrofoda text-white shadow'>Início</button>
      </div>
      <div class='py-4 px-2'>
      <button class='transition rounded p-3 text-white shadow pedrofoda'>Novidades</button>
      </div>
      <div class='py-4 px-2'>
      <button class='transition rounded p-3 text-white shadow pedrofoda'>Sobre nós</button>
      </div>
      <div class='py-4 px-2'>
      <button class='transition rounded p-3 text-white shadow pedrofoda'>Contato</button>
      </div>
    </div>

    <div class='mt-16 flex justify-center'>
      <h3 class='text-4xl text-white '>A equipe:</h3>
    </div>





    <div class="equipe">
      <div class="flex m-16 justify-center space-x-8">
        <div class="sombra transition duration-300 ease-in-out w-64 h-128 rounded-xl bg-black bg-opacity-60">
          <img class="p-8 rounded-full h-64 w-64 object-cover"src="https://avatars.githubusercontent.com/u/25137901?s=460&u=878b23db5d61fc46eca1113bc340a6837e24f47b&v=4" alt="pedro"/>
          <div class="px-4 pb-4 leading-7 text-center text-white">
            <h1 class="font-bold text-xl nomesintegrantes">SMEZZY</h1>
            <p class="bloom-brabo">Front-end</p>
          </div>
        </div>
        <div class="sombra transition duration-200 ease-out w-64 h-128 rounded-xl bg-black bg-opacity-60">
          <img class="p-8 rounded-full h-64 w-64 object-cover"src="https://avatars.githubusercontent.com/u/63268126?s=460&u=f66199785f09ee50fb3ffabf0da2a1aecb13cf1c&v=4" alt="pedro"/>
          <div class="px-4 pb-4 leading-7 text-center text-white">
            <h1 class="font-bold text-xl nomesintegrantes">abcBW</h1>
            <p class="bloom-brabo">Fanatico por Linux</p>
          </div>
        </div>
        <div class="sombra transition duration-200 ease-out w-64 h-128 rounded-xl bg-black bg-opacity-60">
          <img class="p-8 rounded-full h-64 w-64 object-cover"src="https://avatars.githubusercontent.com/u/26889563?s=460&u=46d6633605a4c7601c69a79a95ba119aa8f0d0ca&v=4" alt="pedro"/>
          <div class="px-4 pb-4 leading-7 text-center text-white">
            <h1 class="font-bold text-xl nomesintegrantes">frontedu</h1>
            <p class="bloom-brabo">Contabilidade e UX Design</p>
          </div>
        </div>
        <div class="sombra transition duration-200 ease-out w-64 h-128 rounded-xl bg-black bg-opacity-60">
          <img class="p-8 rounded-full h-64 w-64 object-cover"src="https://avatars.githubusercontent.com/u/58447165?s=460&u=e3c221d8790f9108b8b2632eb986dfbd44030674&v=4" alt="pedro"/>
          <div class="px-4 pb-4 leading-7 text-center text-white">
            <h1 class="font-bold text-xl nomesintegrantes">ChernoBen</h1>
            <p class="bloom-brabo">Back-end porem faz tudo</p>
          </div>
        </div>
      </div>
    </div>
    
    <div class='mt-16 flex justify-center'>
      <h3 class='text-4xl text-white '>Ultimos Posts:</h3>
    </div>

    <div class="flex m-8 justify-center space-x-8">
        <div class="w-256 h-128 rounded-xl bg-black bg-opacity-60">
          <div class="flex inline-block px-4 pt-4 items-center">
            <img class="p-2 rounded-full h-16 w-16 text-left object-cover"src="https://wallpaperaccess.com/full/1099445.png" alt="pedro"/>
            <h1 class="font-bold text-white px-4 text-red-500">Smezzy</h1>
          </div>
          <p class="text-white pl-24">Esse com certeza é um dos melhores animes ja feitos</p>
        <img class="rounded h-96 w-auto object-cover relative mx-16 my-6 mb-14" src="https://i.imgur.com/LQrC8Tg.png"></img>
        </div>
    </div>
    <div class="flex m-8 justify-center space-x-8">
        <div class="w-256 h-128 rounded-xl bg-black bg-opacity-60">
          <div class="flex inline-block px-4 pt-4 items-center">
            <img class="p-2 rounded-full h-16 w-16 text-left object-cover"src="https://avatars.githubusercontent.com/u/63268126?s=460&u=f66199785f09ee50fb3ffabf0da2a1aecb13cf1c&v=4" alt="pedro"/>
            <h1 class="font-bold text-white px-4 text-purple-300">abcBW</h1>
          </div>
          <p class="text-white pl-24">Finalmente. Agora posso utilizar Adobe After Effects no<br></br>terminal do Linux. Muito melhor do que ter que instalar Windows</p>
        <img class="rounded h-96 w-auto object-cover relative mx-16 my-6 mb-14" src="https://i.imgur.com/Kzl4N3j.png"></img>
        </div>
    </div>
    <div class="flex m-8 justify-center space-x-8">
        <div class="w-256 h-128 rounded-xl bg-black bg-opacity-60">
          <div class="flex inline-block px-4 pt-4 items-center">
            <img class="p-2 rounded-full h-16 w-16 text-left object-cover"src="https://avatars.githubusercontent.com/u/58447165?s=460&u=e3c221d8790f9108b8b2632eb986dfbd44030674&v=4" alt="pedro"/>
            <h1 class="font-bold text-white px-4 text-green-400">ChernoBen</h1>
          </div>
          <p class="text-white pl-24">Pescaria rendeu hoje com meu mano Tiao Carreiro</p>
        <img class="rounded h-96 w-auto object-cover relative mx-16 my-6 mb-14" src="https://i.imgur.com/HfP2UEk.png"></img>
        </div>
    </div>
    <div class="flex m-8 justify-center space-x-8">
        <div class="box-border rounded-xl bg-black bg-opacity-60">
          <div class="flex inline-block px-4 pt-4 items-center">
            <img class="p-2 rounded-full h-16 w-16 text-left object-cover"src="https://avatars.githubusercontent.com/u/26889563?s=460&u=46d6633605a4c7601c69a79a95ba119aa8f0d0ca&v=4" alt="pedro"/>
            <h1 class="font-bold text-white px-4 text-blue-500">frontedu</h1>
          </div>
          <p class="text-white pl-24">Hoje troquei umas ideias com o Elon Musk. É muito bom conversar<br></br>com alguém que consegue acompanhar o meu raciocínio</p>
          <img class="rounded h-96 object-cover relative mx-16 my-6 mb-14" src="https://wallpapercave.com/wp/wp2048442.jpg"></img>
        </div>
    </div>


    <div id="contatos_do_pedro_belquior" class="botoes flex justify-end m-6 space-x-3">
        <div class="botao rounded-full">
          <div class="icone">
            <a class="fa fa-facebook"></a>
           </div>
        </div>
        <div class="botao rounded-full">
          <div class="icone">
            <a class="fa fa-twitter"></a>
           </div>
        </div>
        <div class="botao rounded-full">
          <div class="icone">
            <a class="fa fa-whatsapp"></a>
           </div>
        </div>
        <div class="botao rounded-full">
          <div class="icone">
            <a class="fa fa-instagram"></a>
           </div>
        </div>
    </div>

    <div class="imagemfundo"></div>
    </>
  )
}
