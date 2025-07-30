import { Stack, Switch, SwitchProps, Typography } from '@mui/material'
import { Controller, useFormContext } from 'react-hook-form'

export type SwitchControllerProps = {
  name: string
  label?: string
} & SwitchProps

export const SwitchController = ({ name, label, ...props }: SwitchControllerProps) => {
  const { control } = useFormContext()
  return (
    <Controller
      control={control}
      render={({ field: { onChange, ...restField } }) => (
        <Stack direction="row" spacing={1} alignItems="center">
          {label && <Typography variant="caption">{label}</Typography>}
          <Switch
            {...restField}
            {...props}
            checked={restField.value}
            onChange={(_, checked) => {
              onChange(checked)
            }}
          />
        </Stack>
      )}
      name={name}
    />
  )
}
