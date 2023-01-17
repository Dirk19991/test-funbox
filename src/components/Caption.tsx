import classes from './Caption.module.css';

interface CaptionProps {
  boughtMessage: string;
  soldMessage: string;
  chosen: boolean;
  sold: boolean;
  chooseCard: () => void;
}

function Caption({
  boughtMessage,
  soldMessage,
  chosen,
  chooseCard,
  sold,
}: CaptionProps) {
  return (
    <>
      {sold && <div className={classes.sold}>{soldMessage}</div>}
      {!sold && chosen && (
        <div className={classes.caption}>{boughtMessage}</div>
      )}

      {!sold && !chosen && (
        <div className={classes.caption}>
          Чего сидишь? Порадуй котэ,{' '}
          <em className={classes.dashed} onClick={chooseCard}>
            купи
          </em>
          <span>.</span>
        </div>
      )}
    </>
  );
}
export default Caption;
