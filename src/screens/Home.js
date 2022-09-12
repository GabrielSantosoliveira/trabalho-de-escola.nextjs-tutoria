import Image from"next/image"
function Home() {
  return (
    <>


      <main>

        <section>



        <h1> O Que e intolerância ? </h1>
        <p> intolerância é o mesmo que ausência de tolerância, característica que corresponde a falta de compreensão ou aceitação em relação a algo.

          Uma pessoa que age com intolerância é chamada de intolerante e, por norma, apresenta um comportamento de repulsa, repugnância e ódio por determinada coisa que lhe seja diferente.

          Do ponto de vista social, as pessoas intolerantes não conseguem aceitar divergentes pontos de vista, ideias ou culturas, principalmente pelo fato de não compreenderem a diversidade do qual é formado o mundo.</p>

          <img src="https://s.dicio.com.br/intolerancia.jpg" alt="intolerancia"/>

        </section>
        
        <section>

        <h1> Alguns videos sobre o assunto </h1>
        <div>

        <iframe width="289px" height="300" src="https://www.youtube.com/embed/TrcqxOLW2-8?start=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

        <iframe width="289px" height="320" src="https://www.youtube.com/embed/nzxWIqUoCnA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

        </div>

        </section>
          
      </main>


<style jsx> {`

main{
  background-color: rgb(206, 206, 247);
}

section{
  width: 96%;
  padding: 1rem;
  background-color:white ;
  margin: 0 auto;
} 
h1{
  font-size: 2.7rem;
  text-align: center;
  font-weight:900;
  margin :2rem 0;
  
}

p{
  font-size:1.5rem ;
  text-align:left ;
  margin :0 0 3rem 0;

}

img{
  width: 100%;
}
  
div{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  
} 

iframe{
  margin:30px 0;
}

@media(min-width:1024px){
  h1{ font-size:3rem}
  p{font-size:2rem}
  iframe{width:400px;}
  img{
    display:block ;
  width:955px;
  margin: auto;
  }
}
@media(min-width:2560px){
  h1{ font-size:4.5rem}
  p{font-size:3.5rem}
  iframe{width:700px;
  height:500px}
}




  `}</style>

    </>
  )
}

export default Home
