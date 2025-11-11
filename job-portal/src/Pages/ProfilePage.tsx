import { Divider } from '@mantine/core'
import React from 'react'
import EmployeeProfile from '../Profile/EmployeeProfile'
import { profile } from '../Data/TalentData'

const ProfilePage = () => {
  return (
    <div className="min-h-[90vh] bg-mine-shaft-950 font-['poppins']">
        <Divider  mx="md" mb="xl"/>
        <EmployeeProfile {...profile}/>
    </div>
  )
}

export default ProfilePage