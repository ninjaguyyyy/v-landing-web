import { playfairDisplay } from 'app/fonts';
import classNames from 'classnames';
import classes from './BannerTitle.module.scss';
import { ExtendableComponentProps } from 'utils/component';

type Props = ExtendableComponentProps<'div'>;

export function BannerTitle({ className, ...rest }: Props) {
  return (
    <div
      className={classNames(
        playfairDisplay.className,
        classes.wrapper,
        className
      )}
      {...rest}
    >
      <div className={'flex flex-row gap-2 lg:flex-col lg:gap-0'}>
        <h3 className={'title first'}>Vệ sinh</h3>
        <h3 className={'title'}>công nghiệp</h3>
      </div>

      <h3 className={'title highlight mr-12 w-fit lg:w-auto'}>Sạch&nbsp;</h3>
      <div className={'flex gap-4 justify-end lg:gap-6'}>
        <h3 className="title">và</h3>
        <h3 className={'title highlight'}>Xanh</h3>
      </div>
    </div>
  );
}
