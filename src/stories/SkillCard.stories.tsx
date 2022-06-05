import React from 'react'
import { Story, Meta } from '@storybook/react'

import SkillCard, { SkillCardProps } from '../SkillCard'
import { list as skillList } from '../skills'
const Icon = skillList[0].Icon

export default {
    component: SkillCard,
    title: 'SkillCard',
} as Meta

const Template: Story<SkillCardProps> = (args: SkillCardProps) => (
    <SkillCard {...args} />
)

export const Default = Template.bind({})
Default.args = {
    title: 'TypeScript',
    icon: <Icon />,
}
