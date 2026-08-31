import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"
import { componentRegistry } from "./quartz/components/registry"
import { profile, explorer, federation } from "./okf.config.mjs"

// Inyectar el perfil, la federación de subgrafos y la configuración del explorador
// definidos en okf.config.mjs
componentRegistry.setOptionOverrides("quartz-okf", { profile, federation })
componentRegistry.setOptionOverrides("quartz-okf-explorer", explorer)

const config = await loadQuartzConfig()
export default config
export const layout = await loadQuartzLayout()
