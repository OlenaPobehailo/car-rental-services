import Filter from 'components/FilterGroup/BrandFilter/BrandFilter'
import React from 'react'
import { StyledFilterGroup } from './FilterGroup.styled'

const FilterGroup = ({setSelectedBrand}) => {
  return (
    <StyledFilterGroup>
          <Filter onBrandSelect={setSelectedBrand} title={'Car brand'} />
    </StyledFilterGroup>
  )
}

export default FilterGroup
