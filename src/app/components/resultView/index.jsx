import React from 'react'
import { connect } from 'react-redux'
import ResultList from './resultList'
import Buttons from './buttons'
import FoundPermutations from './foundPermutations'

const ResultView = ( props ) => {
  const { game, settings } = props
  return (
    <div>
      <Buttons>
        <ResultList
          numberOfFoundPermutations={ game.savedPermutations.length }
          numberOfCorrectPermutations={ settings.correctCombinations.length }
        />
      </Buttons>
      <FoundPermutations
        className='small-12 medium-10 medium-offset-1 columns'
        savedPermutations={ game.savedPermutations }
        settings={ settings }
      />
    </div>
  )
}

const mapStateToProps = ( state ) => {
  return {
    game: state.game,
    settings: state.settings
  }
}

export default connect( mapStateToProps )( ResultView )
