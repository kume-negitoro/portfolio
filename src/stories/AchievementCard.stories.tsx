import React from 'react'
import { Story, Meta } from '@storybook/react'

import AchievementCard, { AchievementCardProps } from '../AchievementCard'

export default {
    component: AchievementCard,
    title: 'AchievementCard',
} as Meta

const Template: Story<AchievementCardProps> = (args: AchievementCardProps) => (
    <AchievementCard {...args} />
)

export const Default = Template.bind({})
Default.args = {
    title: '普通自動車第一種免許',
    date: '2018/10/30',
    description: '2018年に生活と通学のため取得しました。',
    urls: ['http://hakodate-chuo.net/'],
}
