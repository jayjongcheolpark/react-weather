import _ from 'lodash'
import React from 'react'
import PropTypes from 'prop-types'
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines'

const propTypes = {
  data: PropTypes.array,
  color: PropTypes.string
}

const defaultProps = {
  data: [],
  color: "red"
}

function average(data) {
  return _.round(_.sum(data)/data.length)
}

function Chart({ data, color, units }) {
  return (
    <div>
      <Sparklines svgHeight={120} svgWidth={180} data={data}>
        <SparklinesLine color={color} />
        <SparklinesReferenceLine type="avg" />
      </Sparklines>
      <div>{average(data)} {units}</div>
    </div>
  )
}

Chart.propTypes = propTypes
Chart.defaultProps = defaultProps

export default Chart
