import { HiMiniXMark, HiOutlineMagnifyingGlass } from 'react-icons/hi2';
import classes from './SearchButton.module.scss';
import { Input, InputAdornment } from '@mui/material';
import IconButton from '@mui/material/IconButton';

export function SearchButton() {
  const isShowClear = false;
  return (
    <form className={classes.search}>
      <Input
        className={'input'}
        placeholder="Search everything here"
        endAdornment={
          <InputAdornment position="end">
            <IconButton>
              <span className={'text-gray text-[1.25rem] '}>
                {isShowClear ? <HiMiniXMark /> : <HiOutlineMagnifyingGlass />}
              </span>
            </IconButton>
          </InputAdornment>
        }
      />
    </form>
  );
}
