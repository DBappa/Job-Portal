import React from 'react'
import { Divider } from '@mantine/core'
import SearchTalentBar from '../FindTalent/SearchTalentBar'
import Talents from '../FindTalent/Talents'

const FindTalentPage = () => {
  return (
    <div className="min-h-[100vh] bg-mine-shaft-950 font-['poppins']">
            <SearchTalentBar/>
            <Divider size="xs" mx="md"/>
            <Talents/>
    </div>
  )
}

export default FindTalentPage