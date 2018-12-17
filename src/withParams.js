import withParamsBrowser from './withParamsBrowser'
import importedWithParams from './params'
/* istanbul ignore next */
const withParams =
  process.env.BUILD === 'web'
    ? withParamsBrowser.withParams
    : importedWithParams.withParams

export default withParams
