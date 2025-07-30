import { Box, TextField, TextFieldProps, Typography } from '@mui/material'
import { Controller, useFormContext } from 'react-hook-form'

export type ColorFieldControllerProps = Omit<TextFieldProps, 'fullWidth' | 'type'> & {
  name: string
  format?: 'hex' | 'rgb' | 'rgba'
}

export const ColorFieldController = (props: ColorFieldControllerProps) => {
  const { name, ...rest } = props
  const { control } = useFormContext()

  return (
    <Controller
      control={control}
      render={({ field, fieldState: { error } }) => (
        <Box sx={{ position: 'relative' }}>
          <TextField
            {...field}
            {...rest}
            error={!!error}
            helperText={error?.message}
            type="color"
            defaultValue={'#000000'}
            sx={{
              ...rest.sx,
              '& input': {
                height: 24,
                width: 20,
                pl: 1,
                py: 0.5,
                cursor: 'pointer',
              },
            }}
          />
          <Typography
            sx={{
              position: 'absolute',
              right: '50%',
              top: 60,
              transform: 'translate(50%, -50%)',
              px: 1,
            }}
          >
            {field.value || '#000000'}
          </Typography>
        </Box>
      )}
      name={name}
    />
  )
}
