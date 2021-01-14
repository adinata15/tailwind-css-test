<template>
  <div>
    <Button
      variant="secondary"
      size="md"
      icon-path="M14.613,10c0,0.23-0.188,0.419-0.419,0.419H10.42v3.774c0,0.23-0.189,0.42-0.42,0.42s-0.419-0.189-0.419-0.42v-3.774H5.806c-0.23,0-0.419-0.189-0.419-0.419s0.189-0.419,0.419-0.419h3.775V5.806c0-0.23,0.189-0.419,0.419-0.419s0.42,0.189,0.42,0.419v3.775h3.774C14.425,9.581,14.613,9.77,14.613,10 M17.969,10c0,4.401-3.567,7.969-7.969,7.969c-4.402,0-7.969-3.567-7.969-7.969c0-4.402,3.567-7.969,7.969-7.969C14.401,2.031,17.969,5.598,17.969,10 M17.13,10c0-3.932-3.198-7.13-7.13-7.13S2.87,6.068,2.87,10c0,3.933,3.198,7.13,7.13,7.13S17.13,13.933,17.13,10" 
      @click="clickFunction"
    >
      <h1>{{ msg + ' ' + counter }}</h1>
    </Button>

    <radio-group @change="actionChange">
      <radio-button name="group1" label="radio-1" value="value-1" checked />
      <radio-button name="group1" label="radio-2" value="value-2" />
      <radio-button name="group1" label="radio-3" value="value-3" />
    </radio-group>

    <checkbox-group @change="actionChange">
      <checkbox-button label="checkbox-1" value="value-1" checked />
      <checkbox-button label="checkbox-2" value="value-2" />
      <checkbox-button label="checkbox-3" value="value-3" />
    </checkbox-group>

    <text-area
      size="lg"
      orientation="horizontal"
      placeholder="type here"
      icon-path="M18.125,15.804l-4.038-4.037c0.675-1.079,1.012-2.308,1.01-3.534C15.089,4.62,12.199,1.75,8.584,1.75C4.815,1.75,1.982,4.726,2,8.286c0.021,3.577,2.908,6.549,6.578,6.549c1.241,0,2.417-0.347,3.44-0.985l4.032,4.026c0.167,0.166,0.43,0.166,0.596,0l1.479-1.478C18.292,16.234,18.292,15.968,18.125,15.804 M8.578,13.99c-3.198,0-5.716-2.593-5.733-5.71c-0.017-3.084,2.438-5.686,5.74-5.686c3.197,0,5.625,2.493,5.64,5.624C14.242,11.548,11.621,13.99,8.578,13.99 M16.349,16.981l-3.637-3.635c0.131-0.11,0.721-0.695,0.876-0.884l3.642,3.639L16.349,16.981z"
      @change="actionChange"
    />
  </div>

</template>

<script>
import Button from './components/w-button/button';
import { RadioGroup, RadioButton } from './components/w-radio/index';
import { CheckboxGroup, CheckboxButton } from './components/w-checkbox/index';
import TextArea from './components/w-textarea/textarea';

export default {
  name: 'HelloWorld',
  components: {
    Button,
    RadioGroup,
    RadioButton,
    CheckboxGroup,
    CheckboxButton,
    TextArea,
  },
  props: {
    msg: {
      type: String,
      default: 'HelloWorld',
    },
  },
  data() {
    return {
      counter: 1,
    };
  },
  methods: {
    clickFunction() {
      this.counter++;
    },
    actionChange(){
      this.counter += 10;
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
