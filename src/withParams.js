import withParamsBrowser from './withParamsBrowser'
import withParams from './params'
/* istanbul ignore next */
const withParams =
  process.env.BUILD === 'web'
    ? withParamsBrowser.withParams
    : withParams.withParams

export default withParams
