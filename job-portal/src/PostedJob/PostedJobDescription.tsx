import { Badge, Tabs } from '@mantine/core'
import React from 'react'
import JobDesc from '../JobDescription/JobDesc'

const PostedJobDescription = () => {
  return (
    <div className='mt-5 w-3/4 px-5'>
        <div className="text-2xl font-semibold flex items-center">Software Engineer <Badge variant='light' ml="sm" color="bright-sun.4" size="sm">Full Time</Badge></div>
        <div className='font-medium text-mine-shaft-300 mb-5'>New York, USA</div>
        <div>
        <Tabs variant="outline" radius="lg" defaultValue="overview">
          <Tabs.List className="[&_button]:text-lg font-semibold mb-5 [&_button[data-active='true']]:text-bright-sun-400">
            <Tabs.Tab value="overview">Overview</Tabs.Tab>
            <Tabs.Tab value="applicants">Applicants</Tabs.Tab>
            <Tabs.Tab value="invited">Invited</Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="overview">
            <JobDesc/>
          </Tabs.Panel>
          <Tabs.Panel value="applicants">
            s
          </Tabs.Panel>
          <Tabs.Panel value="invited">
            t
          </Tabs.Panel>
        </Tabs>
      </div>
    </div>
  )
}

export default PostedJobDescription