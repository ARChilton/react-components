import images from '../../../Components/Images/Images'

export const CHANGE_DESIGN_IMAGE = 'CHANGE_DESIGN_IMAGE'
export const CHANGE_PORTFOLIO_IMAGE = 'CHANGE_PORTFOLIO_IMAGE'
export const CHANGE_SEARCH_ENGINE_INPUT = 'CHANGE_SEARCH_ENGINE_INPUT'
export const RESET_SEARCH_ENGINE_INPUT = 'RESET_SEARCH_ENGINE_INPUT'
export const INCREMENT_SEARCH_ENGINE_INPUT = 'INCREMENT_SEARCH_ENGINE_INPUT'

export const changeDesignImage = (designImagePreview) => ({
  type: CHANGE_DESIGN_IMAGE,
  payload: { designImagePreview },
})
export const changePortfolioImage = (portfolioPreview) => ({
  type: CHANGE_DESIGN_IMAGE,
  payload: { portfolioPreview },
})

export const changeSearchEngineInput = (searchEngineInput) => ({
  type: CHANGE_SEARCH_ENGINE_INPUT,
  payload: { searchEngineInput },
})
export const resetSearchEngineInput = () => ({
  type: RESET_SEARCH_ENGINE_INPUT,
  payload: { searchEngineInput: 0 },
})

export const incrementSearchEngineInput = () => ({
  type: INCREMENT_SEARCH_ENGINE_INPUT,
})

const initialState = {
  designImages: [
    images.starMindDemoMockup,
    images.websiteDesign,
    images.websiteDesign2,
  ],
  designImagePreview: 0,
  portfolio: [
    {
      src: 'https://checkpointlive.com',
      iframe: true,
      caption: 'A software as a service website for events.',
      imgSrc: 'https://checkpointlive.com/largeLogo.png',
      imgBackgroundColor: '#fff',
    },
    {
      src: 'https://tonbridge-scouts.org.uk',
      iframe: true,
      caption:
        'I manage the Tonbridge District Scouts website, a low budget website built in wordpress for easier blog posting.',
      imgSrc:
        'https://tonbridge-scouts.org.uk/wp-content/uploads/2017/04/tonbridge-starts-transparent-large.png',
      imgBackgroundColor: '#fff',
    },
    {
      src: 'https://flixpremiere.com',
      iframe: false,
      caption: 'I helped build some of the flixpremiere website.',
      imgSrc: images.flix,
      imgBackgroundColor: '#000',
    },
  ],
  portfolioPreview: 0,
  searchEngine: [
    'How can I keep knowledge in house',
    'What is starmind?',
    'What is AI?',
    'How to use Starmind',
    'Tools for knowledge management',
    'Artificial Intelligence',
    'How can I make better use of staff knowledge',
    'Artificial Intelligence',
    'AI companies',
  ],
  searchEngineInput: 0,
}

const searchEngineInputCount = initialState.searchEngine.length
let autoSearchEngine = null
const automateSearchEngineDelay = 5000
export const automateSearchEngineInputs = (id) => (dispatch) => {
  clearTimeout(autoSearchEngine)
  const updater =
    id + 1 < searchEngineInputCount
      ? (autoSearchEngine = setTimeout(
          () => dispatch(incrementSearchEngineInput()),
          automateSearchEngineDelay
        ))
      : setTimeout(
          () => dispatch(resetSearchEngineInput()),
          automateSearchEngineDelay
        )
  return updater
}

const restOfSiteReducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case CHANGE_DESIGN_IMAGE:
    case CHANGE_PORTFOLIO_IMAGE:
    case CHANGE_SEARCH_ENGINE_INPUT:
    case RESET_SEARCH_ENGINE_INPUT:
      return { ...state, ...payload }
    case INCREMENT_SEARCH_ENGINE_INPUT: {
      const inputVal = state.searchEngineInput + 1
      return { ...state, searchEngineInput: inputVal }
    }
    default:
      return state
  }
}

export default restOfSiteReducer

export const getDesignImageArray = (state) => state.designImages

export const getDesignImagePreview = (state) => state.designImagePreview

export const getPortfolioArray = (state) => state.portfolio

export const getPortfolioPreview = (state) => state.portfolioPreview

export const getSearchEngineArray = (state) => state.searchEngine

export const getSearchEngineInput = (state) => state.searchEngineInput
