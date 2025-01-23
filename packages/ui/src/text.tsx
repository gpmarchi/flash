import { ComponentProps } from 'react'

type TextProps = ComponentProps<'span'>

export function Text(props: TextProps) {
  return <span {...props} />
}
