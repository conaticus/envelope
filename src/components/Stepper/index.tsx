import { Box, HStack, IconButton } from '@chakra-ui/react'
import React, { useMemo } from 'react'
import { CaretLeftIcon, CaretRightIcon } from '../../icons'

type Props = {
  index: number
  pageCount: number
  onIndexChange?: (index: number) => void
  onPrevious?: () => void
  onNext?: () => void
  step?: (index: number) => React.ReactNode
  hideControls?: boolean
}

export const Stepper = ({ index, onPrevious, onNext, onIndexChange, step, pageCount, hideControls }: Props) => {
  const pageArray = useMemo(() => Array.from('0'.repeat(pageCount)), [pageCount])

  const handleIndexChange = (newIndex: number) => {
    onIndexChange?.(newIndex)
  }

  return (
    <HStack spacing="8">
      {!hideControls && (
        <IconButton
          aria-label="Previous"
          icon={<CaretLeftIcon color="ui.100" boxSize="4" />}
          borderRadius="full"
          onClick={() => {
            if (index > 0) {
              handleIndexChange(index - 1)
              onPrevious?.()
            }
          }}
        />
      )}
      <HStack spacing="4">
        {pageArray.map((_, i) =>
          step ? (
            step(i)
          ) : (
            <Box
              key={i}
              boxSize="2"
              rounded="full"
              transition="all 0.2s"
              transform={`scale(${i === index ? 1.25 : 1.0})`}
              bg={index == i ? 'ui.40' : 'ui.10'}
            />
          ),
        )}
      </HStack>
      {!hideControls && (
        <IconButton
          aria-label="Next"
          icon={<CaretRightIcon color="ui.100" boxSize="4" />}
          borderRadius="full"
          onClick={() => {
            if (index < pageCount - 1) {
              handleIndexChange(index + 1)
              onNext?.()
            }
          }}
        />
      )}
    </HStack>
  )
}
