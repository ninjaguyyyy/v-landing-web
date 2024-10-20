import classes from './BoxItem.module.scss';
import { montserrat } from 'app/fonts';
import classNames from 'classnames';

type Props = {
  headingText: string;
  effectText: string;
  endText: string;
};

export function BoxItem({ headingText, effectText, endText }: Props) {
  return (
    <div className={classes.box}>
      <span className={classNames(montserrat.className, 'heading')}>
        {headingText}
      </span>
      <span className="text-effect">{effectText}</span>
      <span className="end">{endText}</span>
    </div>
  );
}
