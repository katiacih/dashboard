
import './dashboard.css';
import React, { useState, useEffect } from 'react'
import Chart from 'react-google-charts'

function Dashboard() {
  const TITULO = 'Quantidade de cadastros primeiro semestre'
  const ANIMACAO = {
    duration: 1000,
    easing: 'out',
    startup: true
  }


  const [dados, setDados] = useState([
    ['Mes', 'Quantidade'],
    ['Janeiro', 33],
    ['Fevereiro', 68],
    ['Março', 49],
    ['Abril', 15],
    ['Maio', 80],
    ['Junho', 27]
  ])

  function alteraDados(){
    const dadosGraficos = dados.map(linha => {
      if(Number.isInteger(linha[1])){
        linha[1] = Math.floor(Math.random() * 101)

      }
      return linha
    })
    setDados(dadosGraficos)
  }

  useEffect(() => {

    const intervalId = setInterval(() => alteraDados(), 5000)

    return () => {
      //qualquer codigo aqui sera executado somente quando for
      // destruido
      clearInterval(intervalId)

    }
  })
  return (
    <div data-testid='dashboard' className="App">
      <h1>Dashboard</h1>
      <Chart
        width={'400px'}
        height={'300px'}
        chartType={'PieChart'}
        data={dados}
        options={{
          title: TITULO
        }}
      />
      {/* Grafico 2 */}
      <Chart
        width={'400px'}
        height={'300px'}
        chartType={'PieChart'}
        data={dados}
        options={{
          title: TITULO,
          is3D: true
        }}
      />

      {/* Grafico 3 */}
      <Chart
        width={'400px'}
        height={'300px'}
        chartType={'PieChart'}
        data={dados}
        options={{
          title: TITULO,
          pieHole: 0.4
        }}
      />


       {/* Grafico 4 de barras */}
       <Chart
        width={'400px'}
        height={'300px'}
        chartType={'BarChart'}
        data={dados}
        options={{
          title: TITULO,
          chartArea: {
            width: '50%'
          },
          hAxis: { title: 'Quantidade'} ,
          vAxis: { title: 'Mes' },
          animation: ANIMACAO
        }}
      />


       {/* Grafico 5 de linhas */}
       <Chart
        width={'400px'}
        height={'300px'}
        chartType={'LineChart'}
        data={dados}
        options={{
          title: TITULO,
          hAxis: { title: 'Mes' } ,
          vAxis: { title: 'Quantidade' },
          animation: ANIMACAO
        }}
      />


        {/* Grafico 5 de Area */}
        <Chart
          width={'400px'}
          height={'300px'}
          chartType={'AreaChart'}
          data={dados}
          options={{
            title: TITULO,
            hAxis: { title: 'Mes' } ,
            vAxis: { title: 'Quantidade' },
            animation: ANIMACAO
          }}
      />
    </div>
  );
}

export default Dashboard;
