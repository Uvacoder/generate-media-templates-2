import React from 'react';

import {
  TRANSFORM_CROP,
  TRANSFORM_QUALITY,
  TRANSFORM_FORMAT
} from '../../utils';

import {
  Flex,
  Input,
  Text
} from '@chakra-ui/core';

import TransformNumberInput from './TransformNumberInput'
import TransformOptionSelect from './TransformOptionSelect';


export default function ImageForm({ store, updateTransforms }) {
  return (
    <Flex mt={8} direction="column" border="2px solid black" borderRadius="8px">
      <Text mt={6} ml={6} as="h2">Image Options</Text>

      <Flex m={4} justifyContent="space-evenly">
        <TransformNumberInput store={store} updateTransforms={updateTransforms} value={store.transforms.width} transform="width" />
        <TransformNumberInput store={store} updateTransforms={updateTransforms} value={store.transforms.height} transform="height" />
        <TransformOptionSelect store={store} updateTransforms={updateTransforms} type={TRANSFORM_QUALITY} defaultOption="auto" transform="quality" />
        <TransformOptionSelect store={store} updateTransforms={updateTransforms} type={TRANSFORM_CROP} defaultOption="scale" transform="crop" />
        <TransformOptionSelect store={store} updateTransforms={updateTransforms} type={TRANSFORM_FORMAT} defaultOption="auto" transform="format" />
      </Flex>
    </Flex>
  )
}