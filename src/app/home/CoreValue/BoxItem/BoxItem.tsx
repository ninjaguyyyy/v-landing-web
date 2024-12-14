import Button from 'app/components/Button/Button';
import classes from './BoxItem.module.scss';
import { montserrat } from 'app/fonts';
import classNames from 'classnames';

type Props = {
  headingText: string;
  effectText: string;
  endText?: string;
  buttonText?: string;
  className?: string;
};

export function BoxItem({ headingText, effectText, endText, buttonText, className }: Props) {
  return (
    <div className={classNames(classes.box, className)} >
      <span className={classNames(montserrat.className, 'heading')}>
        {headingText}
      </span>
      <span className="text-effect" dangerouslySetInnerHTML={{ __html: effectText }} />
      {endText && <span className="end">{endText}</span>}
      {buttonText && <Button className={classes["button"]}>{buttonText}</Button>}

    </div>
  );
}
