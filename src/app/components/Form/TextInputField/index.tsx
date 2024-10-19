import { TextField, TextFieldProps } from '@mui/material';
import styles from './index.module.scss';
import { Controller } from 'react-hook-form';
import { Control } from 'react-hook-form/dist/types/form';

type Props = TextFieldProps & {
  name?: string;
  control?: Control<any>;
  className?: string;
  defaultValue?: unknown;
};

export default function TextInputField(props: Props) {
  const { name, control, defaultValue, className, ...textFieldProps } = props;
  const defaultValueInput = defaultValue !== undefined ? defaultValue : '';

  return (
    <Controller
      name={name as string}
      control={control}
      defaultValue={defaultValueInput}
      render={({ field }) => {
        return (
          <TextField
            className={`${styles.container} ${className}`}
            {...textFieldProps}
            {...field}
          />
        );
      }}
    />
  );
}
