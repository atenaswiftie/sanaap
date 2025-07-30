import type { Theme } from "@mui/material/styles"
import type { SystemStyleObject } from "@mui/system"

type Styles = SystemStyleObject<Theme> | ((theme: Theme) => SystemStyleObject<Theme>)
export type SxStylesObject = { [key: string]: Styles }
