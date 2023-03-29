$(function(){
   //ITEMS_MENU
    const menu =
    [
        {title:'HOME', link:'index.php'},
        {title:'PORTFÓLIO', link:'index.php?a=portfolio'},
        {title:'SERVIÇOS', link:'index.php?a=services'},
        {title:'CONTATO', link:'index.php?a=contato'},
    ]
    menu.map((i)=>{
        $('.items_menu ul').append(`
            <a href="${i.link}">
                <li>${i.title}</li>
            </a>
        `)
        $('.menu_mobile ul').append(`
        <a href="${i.link}">
            <li>${i.title}</li>
        </a>
        `)
        $('.cx ul').append(`
            <a href="${i.link}">
                <li>${i.title}</li>
            </a>
        `)
        
        
    })

    $('.btn_mobile').click(()=>{
        $('.menu').toggle()
    })
    
    //PORTFOLIO

    //Designer Gráfico
    const design = 
    [
        {nome:'Corel Draw', img:'img/corel.png', link:'', desc:'Como designer gráfico, tenho uma vasta experiência com o CorelDRAW, uma das principais ferramentas do mercado para criação e edição de gráficos vetoriais. Desde o início da minha carreira, tenho utilizado o CorelDRAW em diversos projetos, desde logotipos e identidades visuais até materiais gráficos para impressão e web.'},
        {nome:'Photoshop', img:'img/photoshop.png', link:'', desc:'Como designer gráfico, tenho experiência com o software Adobe Photoshop, uma das ferramentas mais populares para edição e manipulação de imagens. '},
        {nome:'Illustrator', img:'img/illustrator.png', link:'', desc:'Como designer gráfico, tenho uma vasta experiência com o software Adobe Illustrator, mais uma das ferramentas do mercado para criação e edição de gráficos vetoriais.'},
        {nome:'InDesign', img:'img/indesign.png', link:'', desc:'Como diagramador, minha experiência com o InDesign tem sido fundamental para a criação de layouts profissionais e a produção de materiais impressos de alta qualidade. Desde que comecei a trabalhar com o software, há alguns anos, tenho aprendido muito sobre como usar suas diversas ferramentas e recursos.'},
        {nome:'After Effects', img:'img/after.png', link:'', desc:'Como editor de vídeo, faço uso do Adobe After Effects para criar e animar gráficos e efeitos especiais em projetos de vídeo. tenho experiência com o software.'},

    ]

    design.map((i)=>{
            $('.designer').append(`
                <option >${i.nome}</option>
        `)
            $('.designer').change(()=>{
                if($('.designer').val()== i.nome){
                    $('.selecionado').html(`
                        <h3>${i.nome} </h3>
                        <p>${i.desc}<p>
                        <img src= ${i.img}>
                    `)
                }
            })
        
       })
        
   // DESENVOLVEDOR

   const desenvolve = 
    [
        {nome:'HTML 5', img:'img/html.png', link:'', desc:'Como Desenvolvedor Web, tenho experiência com HTML5 que envolve a criação e estruturação de conteúdo na web usando essa linguagem de marcação. Utilizando as principais tags HTML5 e sua sintaxe em sua semântica.'},
        {nome:'CSS 3', img:'img/css.png', link:'', desc:'Como Desenvolvedor Web, tenho experiência com CSS3 que envolve a criação e estilização de páginas da web, usando essa linguagem de estilo. E suas principais propriedades CSS3, sua sintaxe para criar designs responsivos e modernos. '},
        {nome:'JavaScript', img:'img/js.png', link:'', desc:'Como Desenvolvedor Web, minha experiência com JavaScript  envolve a criação de interatividade e lógica do lado do cliente em páginas da web, usando essa linguagem de programação. E com a sintaxe básica do JavaScript, e as principais estruturas de controle de fluxo, como loops e condicionais, bem como as funções e objetos integrados, inclusive para criação deste portfólio.'},
        {nome:'ReactJs', img:'img/reactjs.png', link:'', desc:'Como um desenvolvedor front-end, o ReactJS é uma ferramenta muito valiosa para a criação de interfaces de usuário dinâmicas e interativas. tenho um bom conhecimento de ReactJS:'},
        {nome:'PHP', img:'img/php.png', link:'', desc:'Como um desenvolvedor Back End, a sua experiência com PHP é fundamental para o desenvolvimento de aplicações web, uso de bancos de dados relacionais com PHP, como MySQL, PostgreSQL, Oracle, SQL Server,CRUD entre outros.'},
        // {nome:'Python', img:'', link:'', desc:''},

    ]

    desenvolve.map((i)=>{
        $('.desenvolve').append(`
            <option>${i.nome} </option>
        `)
       $('.desenvolve').change(()=>{
        if($('.desenvolve').val() == i.nome){
            $('.selecionado').html(`
                <h3>${i.nome} </h3>
                <p>${i.desc} </p>
                <img src= ${i.img}>
            `)
        }
       })
    })

    // JOBS

    const jobs =
    [
        {nome:'Rondinelle Serviços Gráficos', link:'https://rondservgraf.netlify.app', img:'img/rond.png'},
        {nome:'Butazzo Pizza', link:'https://pizzamy.netlify.app', img:'img/pizza.png'},
        {nome:'Débora Oliveira', link:'https://deboraah.netlify.app', img:'img/deb.png'},
        {nome:'Relógio', link:'https://myrelogio.asdesigner.repl.co', img:'img/relogio.png'},
        {nome:'Café Meridiano', link:'https://coffe.asdesigner.repl.co/', img:'img/coffe.png'},
        {nome:'Meus Carros', link:'https://concessionaria.asdesigner.repl.co/', img:'img/cars.png'},

    ]
    jobs.map((i)=>{
        $('.jobs').append(`
            <div class="box">
                <a href=${i.link} />
                <img src=${i.img} alt="trabalhos" />
                <p>${i.nome} </p>
            </div>
        `)
    })

  // SERVIÇO DE DESIGNER GRÁFICO

  const info = 
  [
    {title:'Designer Gráfico', img:'', desc:'O melhor Designer do Mundo', link:'',list:'Identidade Visual<br> Impressos<br> Embalagens<br> Sinalização <br> Websites<br> Interfaces de Usuário<br>Marketing Digital'},
    {title:'Desenvolvedor', img:'', desc:'O melhor Designer do Mundo', link:'',list:'Desenvolvimento de websites<br> Desenvolvimento de aplicativos web<br> Desenvolvimento de landing pages<br> Otimização e desempenho<br>Manutenção e atualização de sites<br>Integração de API'},
    {title:'Motion Designer', img:'', desc:'O melhor Designer do Mundo', link:'',list:'Animação de Gráfica<br> Títulos e Créditos<br> Animação de Personagens<br> Edição de Vídeo<br> Criação de Vinhetas<br> Animação de Tipografia<br> Criação de Anúncios<br> Produção de Efeitos Visuais'},
  ]


  info.map((i, index)=>{
        $('.container').append(`
        <div class="boxInfo">
            <div class="topo_box center" key=${index} >
                <div class="aba1" key=${index}>${i.title}</div>
                <div class="aba2 center  " key=${index} ><span>Fechar X</span></div>
            </div>
            <div class="base_box" key=${index} >
                <h1 key=${index}>${i.title}</h1>
                <span>${i.list}</span>
                
            </div>
         </div>
        </div>
        `)
        $('.aba1').click((e)=>{
            let key = e.target.closest('.aba1').getAttribute('key')
            if(key == index){
                $('.base_box').eq(index)
                .animate({height: "300px"}) 
                $('.aba2').eq(index)
                .animate({width: "100px"}) 
                $('.aba2 span').eq(index).show()   
                $('.base_box').eq(index).show() 
            }
           
      })
            $('.aba2').click(()=>{
                $('.base_box')
                    .animate({height: "0"})
                $('.aba2')
                    .animate({width: "0"})
                $('.aba2 span').hide()   
                $('base_box p').hide()
                $('.base_box').hide() 
                
            })
    
  })


  //CERTIFICADOS

  const certifica =
  [
    {nome:'', img:'img/certifica01.png', link:''},
    {nome:'', img:'img/certifica02.png', link:''},
    {nome:'', img:'img/certifica03.png', link:''},
    {nome:'', img:'img/certifica04.png', link:''},
    {nome:'', img:'img/certifica05.png', link:''}
  ]

 certifica.map((i)=>{
    $('.certificados').append(`
        <div class="certifica">
            <img src=${i.img} alt="certificado 01" />
        </div>
    `)
 })

})