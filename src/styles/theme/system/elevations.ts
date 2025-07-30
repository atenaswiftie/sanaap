import type { Elevations } from "../types"

const darkElevations: Elevations = {
  level1: "0px 1px 0px rgba(0, 0, 0, 0.3)",
  level2: "0px 1px 2px 0px rgba(0, 0, 0, 0.30), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)",
  level3: "0px 0px 2px rgba(0, 0, 0, 0.6), 0px 4px 10px rgba(0, 0, 0, 0.3)",
  level4: "0px 0px 2px rgba(0, 0, 0, 0.3), 0px 8px 20px rgba(0, 0, 0, 0.45)",
}

const lightElevations: Elevations = {
  level1: "0px 1px 0px rgba(0, 0, 0, 0.1)",
  level2: "0px 2px 1px rgba(0, 0, 0, 0.1), 0px 0px 1px rgba(0, 0, 0, 0.25)",
  level3: "0px 0px 2px rgba(0, 0, 0, 0.2), 0px 4px 10px rgba(0, 0, 0, 0.1)",
  level4: "0px 0px 2px rgba(0, 0, 0, 0.1), 0px 8px 20px rgba(0, 0, 0, 0.15)",
}

export { darkElevations, lightElevations }
