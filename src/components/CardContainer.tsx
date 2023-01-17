import Card from './Card';
import classes from './CardContainer.module.css';

function CardContainer() {
  const cardsInfo = [
    {
      id: 1,
      filling: 'с фуа-гра',
      size: '10',
      giftCount: '',
      giftMessage: 'мышь в подарок',
      weight: '0,5',
      customerHappy: '',
      boughtMessage: 'Печень утки разварная с артишоками.',
      soldMessage: 'Печалька, с фуа-гра закончился.',
    },
    {
      id: 2,
      filling: 'с рыбой',
      size: '40',
      giftCount: '2',
      giftMessage: 'мыши в подарок',
      weight: '2',
      customerHappy: '',
      boughtMessage: 'Головы щучьи с чесноком да свежайшая сёмгушка.',
      soldMessage: 'Печалька, с рыбой закончился.',
    },
    {
      id: 3,
      filling: 'с курой',
      size: '100',
      giftCount: '5',
      giftMessage: 'мышей в подарок',
      weight: '5',
      customerHappy: 'заказчик доволен',
      boughtMessage: 'Филе из цыплят с трюфелями в бульоне.',
      soldMessage: 'Печалька, с курой закончился.',
    },
  ];

  return (
    <main className={classes.main}>
      {cardsInfo.map((card) => (
        <Card key={card.id} {...card} />
      ))}
    </main>
  );
}
export default CardContainer;
