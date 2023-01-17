import { useState } from 'react';
import Caption from './Caption';
import classes from './Card.module.css';

interface CardProps {
  filling: string;
  size: string;
  giftCount: string;
  giftMessage: string;
  weight: string;
  customerHappy: string;
  boughtMessage: string;
  soldMessage: string;
}

function Card({
  filling,
  size,
  giftCount,
  giftMessage,
  weight,
  customerHappy,
  boughtMessage,
  soldMessage,
}: CardProps) {
  const [chosen, setChosen] = useState(false);
  const [justBought, setJustBought] = useState(false);
  const [sold, setSold] = useState(false);

  const chooseCard = () => {
    if (sold) {
      return;
    }
    setChosen((prev) => !prev);
    setJustBought(true);
  };

  const chooseCardWithButton = () => {
    setChosen((prev) => !prev);
    setJustBought(false);
  };

  const getWrapperStyles = () => {
    if (sold) {
      return classes.sold;
    } else if (chosen && justBought) {
      return classes.justBoughtCardWrapper;
    } else if (chosen && !justBought) {
      return classes.chosenCardWrapper;
    } else if (!chosen) {
      return classes.cardWrapper;
    }
  };

  const wrapperStyles = getWrapperStyles();

  return (
    <section className={classes.wrapper}>
      <div
        onMouseLeave={
          chosen
            ? () => {
                setJustBought(false);
              }
            : () => {}
        }
        className={wrapperStyles}
        onClick={chooseCard}
      >
        <div className={chosen ? classes.chosenCircle : classes.circle}>
          <div>{weight}</div>
          <div className={classes.kilogramm}>{'кг'}</div>
        </div>
        <div className={classes.card}>
          <div className={classes.cardContent}>
            <div className={classes.name}>Сказочное заморское яство</div>
            <div className={classes.tasty}>Нямушка</div>
            <div className={classes.filling}>{filling}</div>
            <div className={classes.size}>
              {size} <span>порций</span>{' '}
            </div>
            <div className={classes.gift}>
              {giftCount}&nbsp;
              <span className={classes.giftCount}>{giftMessage}</span>
            </div>
            <div className={classes.customerHappy}>{customerHappy}</div>
          </div>
        </div>
      </div>

      <Caption
        boughtMessage={boughtMessage}
        soldMessage={soldMessage}
        chosen={chosen}
        chooseCard={chooseCardWithButton}
        sold={sold}
      />
    </section>
  );
}
export default Card;
