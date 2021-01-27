import Head from 'next/head'

export default function Home() {
  return (
    <>
    <Head>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
    </Head>

    <div class='block justify-center bg-purple-900 shadow-2xl'>
    
      <h1 class='antialiased text-center p-10 text-white font-bold text-4xl'>Pedro Belquior!</h1>

    </div>

    <div class='flex inline justify-center bg-purple-800 justify-self-center'>

      <div class='py-4 px-2'>
      <button class='rounded-lg bg-purple-300 p-4 pedrofoda'>Início</button>
      </div>

      <div class='py-4 px-2'>
      <button class='transition rounded-lg bg-purple-200 hover:bg-purple-300 p-4 border pedrofoda'>Novidades</button>
      </div>

      <div class='py-4 px-2'>
      <button class='transition rounded-lg bg-purple-200 hover:bg-purple-300 p-4 border pedrofoda'>Sobre mim</button>
      </div>

      <div class='py-4 px-2'>
      <button class='transition rounded-lg bg-purple-200 hover:bg-purple-300 p-4 border pedrofoda'>Onlyfans</button>
      </div>

    </div>


    <div class='mt-16 flex justify-center'>
      <h3 class='text-4xl font-bold text-pink-500'>Top 3 pedros belquiores:</h3>
    </div>





    <div>
      <div class="flex m-16 justify-center space-x-8">
        <div class="sombra transition duration-300 ease-in-out w-64 h-128 rounded-xl bg-black bg-opacity-50">
          <img class="p-8 rounded-full h-64 w-64 object-cover"src="https://scontent.fcfc1-1.fna.fbcdn.net/v/t1.0-9/141189851_1097366570726697_3105894237784092054_o.jpg?_nc_cat=100&ccb=2&_nc_sid=8bfeb9&_nc_ohc=XMoQKeqelAIAX9GfutY&_nc_ht=scontent.fcfc1-1.fna&oh=4deb4294b8009f20651c53f29cc0983e&oe=6034F673" alt="pedro"/>
          <div class="px-4 pb-4 leading-7 text-center text-white">
            <h1 class="font-bold text-xl text-blue-500">PEDRO BELQUIOR</h1>
            <p>pedro belquiror</p>
          </div>
        </div>
        <div class="sombra transition duration-200 ease-out w-64 h-128 rounded-xl bg-black bg-opacity-50">
          <img class="p-8 rounded-full h-64 w-64 object-cover"src="https://scontent.fudi1-2.fna.fbcdn.net/v/t1.0-9/122118547_1025927937870561_9115612568851125329_o.jpg?_nc_cat=100&ccb=2&_nc_sid=174925&_nc_ohc=L4UwhExh90EAX8A0D1L&_nc_ht=scontent.fudi1-2.fna&oh=fd83203008f1f57b605dcde1fe925a94&oe=60357E3E" alt="pedro"/>
          <div class="px-4 pb-4 leading-7 text-center text-white">
            <h1 class="font-bold text-xl text-blue-500">PEDRO BELQUIOR</h1>
            <p>Protegido do covid-19</p>
          </div>
        </div>
        <div class="sombra transition duration-200 ease-out w-64 h-128 rounded-xl bg-black bg-opacity-50">
          <img class="p-8 rounded-full h-64 w-64 object-cover"src="https://scontent.fudi1-1.fna.fbcdn.net/v/t1.0-9/89091639_853588211771202_5583106452827930624_n.jpg?_nc_cat=108&ccb=2&_nc_sid=09cbfe&_nc_ohc=Hgr3GN3WMlYAX-eCXUc&_nc_ht=scontent.fudi1-1.fna&oh=b285149826a719b3bbec9fecbcae08f5&oe=6037156D" alt="pedro"/>
          <div class="px-4 pb-4 leading-7 text-center text-white">
            <h1 class="font-bold text-xl text-blue-500">BELQUIOR PEDRO</h1>
            <p>Astronomo da NASA</p>
          </div>
        </div>
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
    </>
  )
}
