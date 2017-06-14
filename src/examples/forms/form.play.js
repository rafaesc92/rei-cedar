import { play } from 'vue-play';
import Inputs from './Inputs';
import InputsExample from '!raw-loader!./Inputs';

import TextDoc from './Input.md';

play(Inputs)
  .displayName('Forms')
  .add('Input', {
    ...Inputs,
    example: InputsExample,
    readme: TextDoc,
  })
  ;
