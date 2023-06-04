import { useState } from 'react';
import Btn from '../Btn';
import icon from '../../assets/icon.png';

const listText = [
  'pessoas com IMC muito abaixo do peso costumam apresentar distúrbios alimentares, como bulimia e anorexia...',
  'Este IMC indica que a pessoa possivelmente tem um peso adequado, o que refletiria em uma boa saúde e em um menor risco de doenças cardiovasculares...',
  'O sobrepeso do Índice de Massa Corporal (IMC) é uma classificação usada para descrever uma faixa de peso acima do considerado saudável com base na altura de uma pessoa.',
  'Essa faixa de IMC indica um excesso significativo de peso em relação à altura, o que pode aumentar o risco de problemas de saúde, como doenças cardíacas, diabetes tipo 2, hipertensão arterial e certos tipos de câncer.',
  'Essa faixa de IMC indica um excesso significativo de peso em relação à altura, o que pode aumentar ainda mais o risco de problemas de saúde, incluindo doenças cardíacas, diabetes tipo 2, hipertensão arterial, certos tipos de câncer, doenças articulares e respiratórias, entre outras.',
  'A obesidade grau 3 é uma condição que requer atenção médica urgente, pois apresenta desafios significativos para a saúde e qualidade de vida. O tratamento da obesidade mórbida geralmente envolve uma abordagem multidisciplinar, incluindo mudanças na alimentação, aumento da atividade física, acompanhamento médico frequente, suporte psicológico e, em alguns casos, intervenções mais intensivas, como medicamentos antiobesidade ou cirurgia bariátrica.',
];

function MainContent() {
  const [imc, setImc] = useState();

  const hasImc = !!imc;
  const def =
    imc <= 16.9
      ? listText[0]
      : imc <= 18.4
      ? listText[0]
      : imc <= 24.9
      ? listText[1]
      : imc <= 29.9
      ? listText[2]
      : imc <= 34.9
      ? listText[3]
      : imc <= 39
      ? listText[4]
      : listText[5];

  const calcImc = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formPeso = formData.get('peso');
    const formAltura = formData.get('altura');
    const resultImc = formPeso / (formAltura * formAltura);
    const formatImc = resultImc.toFixed(2);
    setImc(+formatImc);
  };

  return (
    <div className='bg-color-white rounded-2xl w-auto md:w-4/6 lg:w-3/6 2xl:w-2/6  container  p-1 mx-auto flex items-center'>
      <main>
        <div className='w-auto m-4  flex justify-between rounded-2xl p-2 items-center bg-primary-color text-color-white'>
          <div className='text-xl mx-4'>
            <h2>Calculadora de Imc</h2>
          </div>
          <div className='mx-4'>
            <a
              className='w-14 h-14 '
              href='https://github.com/IugAnemona?tab=repositories'
              target='_blank'
              rel='noreferrer'
            >
              <img
                src={icon}
                alt='icon'
                className='w-14  rounded-full hover:scale-105'
              />
            </a>
          </div>
        </div>
        <form
          className='m-4 mb-0 flex items-center flex-wrap rounded-t-2xl bg-primary-color p-6'
          onSubmit={calcImc}
        >
          <div className='text-color-white m-5'>
            <div className='flex mx-1'>
              <h3 className=''>Peso</h3>
            </div>
            <input
              placeholder='Ex: 80'
              name='peso'
              className='p-2 border-2 outline-0 border-border rounded-md text-base focus:border-focus focus:shadow-sm text-text'
            />
          </div>
          <div className='text-color-white m-5  '>
            <div className='flex mx-1'>
              <h3 className=''>Altura</h3>
            </div>
            <input
              placeholder='Ex: 1.74'
              name='altura'
              className='p-2 border-2 outline-0 border-border rounded-md text-base focus:border-focus focus:shadow-sm text-text'
            />
          </div>
          <Btn />
        </form>
        {hasImc ? (
          <div
            className={
              'flex m-4 mt-0 justify-center items-center flex-wrap rounded-b-lg bg-slate-100 p-6'
            }
          >
            <div className='w-full text-center'>
              <h1 className='font-bold text-5xl'>{imc}</h1>
            </div>
            <div className='w-5/5 text-center p-10'>
              <p>{def}</p>
            </div>
          </div>
        ) : null}
      </main>
    </div>
  );
}
export default MainContent;
