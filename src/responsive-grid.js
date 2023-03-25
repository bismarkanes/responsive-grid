import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { genericDevice } from './devizesize'
import { ContainerBaseRow } from '@bismarkanes/container-base'

const StyledGrid = styled(ContainerBaseRow)`
  @media all and ${genericDevice.smallest} {
    flex: 1 ${(props) => props.Grids.gridMobile}};
    flex-grow: ${(props) => props.flexGrow};
    box-sizing: border-box;
  }

  @media all and ${genericDevice.mobile} {
    flex: 1 ${(props) => props.Grids.gridMobile}};
    flex-grow: ${(props) => props.flexGrow};
    box-sizing: border-box;
  }

  @media all and ${genericDevice.tablet} {
    flex: 1 ${(props) => props.Grids.gridTablet};
    flex-grow: ${(props) => props.flexGrow};
    box-sizing: border-box;
  }

  @media all and ${genericDevice.laptop} {
    flex: 1 ${(props) => props.Grids.gridLaptop};
    flex-grow: ${(props) => props.flexGrow};
    box-sizing: border-box;
  }

  @media all and ${genericDevice.desktop} {
    flex: 1 ${(props) => props.Grids.gridDesktop};
    flex-grow: ${(props) => props.flexGrow};
    box-sizing: border-box;
  }
`

export const ResponsiveGrid = (props) => {
  return (
    <StyledGrid
      Grids={{
        gridMobile: `${100 / props.mobileGrid}%`,
        gridTablet: `${100 / props.tabletGrid}%`,
        gridLaptop: `${100 / props.laptopGrid}%`,
        gridDesktop: `${100 / props.desktopGrid}%`
      }}
      {...props}
    />
  )
}

ResponsiveGrid.propTypes = {
  mobileGrid: PropTypes.number,
  tabletGrid: PropTypes.number,
  laptopGrid: PropTypes.number,
  desktopGrid: PropTypes.number
}

ResponsiveGrid.defaultProps = {
  mobileGrid: 2,
  tabletGrid: 4,
  laptopGrid: 6,
  desktopGrid: 8
}
