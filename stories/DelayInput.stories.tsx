import { Meta } from '@storybook/react';
import { DelayInput } from '../components/DelayInput';
import React, { useCallback } from 'react'

export default {
  title: 'DelayInput',
  component: DelayInput,
  children: { 
    control: { type: 'text' }
  },
} as Meta<typeof DelayInput>;

export const Primary = (props: []) => {
  const method = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    console.log('親のメソッドです', e)
  }, [])

  return (
    <DelayInput onChange={method}/>
  )
}
